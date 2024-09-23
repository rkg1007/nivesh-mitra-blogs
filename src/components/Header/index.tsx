"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import DropDown from "./DropDown";
import menuData from "./menuData";
import { getUniqueCategories } from "@/data";

const blogCategories = getUniqueCategories();
blogCategories.forEach((category, idx) => {
  menuData[1].submenu?.push({
    id: idx,
    path: `/?category=${category}`,
    title: category
      .split("-")
      .map((part) => part.slice(0, 1).toUpperCase() + part.slice(1))
      .join(" "),
  });
});

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);
  const navigationRef = useRef<HTMLDivElement>(null); // Reference for the navigation

  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
    return () => {
      window.removeEventListener("scroll", handleStickyMenu);
    };
  }, []);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (
        navigationOpen &&
        navigationRef.current &&
        !navigationRef.current.contains(event.target)
      ) {
        setNavigationOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleNavigation = () => {
    setNavigationOpen((prev) => !prev);
  };

  console.log(navigationOpen);

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-9999 w-full bg-white py-7 transition-all duration-300 ease-in-out lg:py-0 ${
          stickyMenu && "!py-4 shadow lg:!py-0"
        }`}
      >
        <div className="relative mx-auto max-w-[1170px] items-center justify-between px-4 sm:px-8 lg:flex xl:px-0">
          <div className="flex w-full items-center justify-between lg:w-3/12">
            <Link href="/">
              <h1>Nivesh Mitra</h1>
            </Link>

            {/* <!-- Hamburger Toggle BTN --> */}
            {/* <!-- Hamburger Toggle BTN --> */}
          </div>

          <div
            ref={navigationRef} // Attach the reference to the navigation div
            className={` invisible h-0 w-full items-center justify-between lg:visible lg:flex lg:h-auto lg:w-9/12 ${
              navigationOpen &&
              `shadow-lgrelative !visible mt-4 !h-auto max-h-[400px] overflow-y-scroll rounded-md bg-white p-7.5`
            }`}
          >
            {/* <!-- Main Nav Start --> */}
            <nav>
              <ul className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-10">
                {menuData.map((menuItem, key) => (
                  <li
                    className={`group relative lg:py-6.5 ${
                      stickyMenu && "lg:!py-5.5"
                    }`}
                    key={key}
                  >
                    {menuItem.submenu ? (
                      <DropDown
                        menu={menuItem}
                        key={key}
                        setNavigationOpen={setNavigationOpen}
                      />
                    ) : (
                      <>
                        <Link
                          href={menuItem.path ? menuItem.path : ""}
                          className="flex items-center justify-between gap-3 hover:text-dark"
                        >
                          {menuItem.title}
                        </Link>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            {/* <!-- Main Nav End --> */}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
