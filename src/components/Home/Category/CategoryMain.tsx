"use client";
import React, { useEffect, useState } from "react";
import SingleBlog from "@/components/Common/SingleBlog";
import Link from "next/link";
import { getUniqueCategories, filterBlogsByCategory } from "../../../data";
import "./CategoryMain.css";
import { useSearchParams } from "next/navigation";

const CategoryMain = () => {
  const params = useSearchParams();
  const selectedCategory = params.get("category") || "all";
  console.log(selectedCategory);
  const categories = ["all", ...getUniqueCategories()];
  const [activeCategory, setActiveCategory] = useState('all');
  const filteredBlogs = filterBlogsByCategory(activeCategory);

  useEffect(() => {
    setActiveCategory(selectedCategory);
  }, [selectedCategory]);

  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="mb-10 md:mb-15 flex overflow-x-auto items-center gap-4 scrollbar-hide">
          {categories.map((categoryItem, key) => {
            const currentCategoryBlogs = filterBlogsByCategory(categoryItem);
            const categoryPostCount = currentCategoryBlogs.length;

            return (
              <button
                onClick={() => setActiveCategory(categoryItem)}
                key={key}
                className={`rounded-full border px-4.5 py-2.5 font-medium capitalize duration-200 ease-in hover:border-dark hover:bg-dark hover:text-white whitespace-nowrap ${
                  activeCategory === categoryItem
                    ? "border-dark bg-dark text-white"
                    : "border-gray-3 bg-gray text-dark"
                }`}
              >
                {categoryItem} (
                {categoryPostCount < 10
                  ? "0" + categoryPostCount
                  : categoryPostCount}
                )
              </button>
            );
          })}
        </div>
      </div>

      {/* <!-- Blog Categories Tab End --> */}

      {/* <!-- Blog Categories Content Start --> */}
      <div>
        <div>
          <div className="grid grid-cols-1 gap-x-7.5 gap-y-11 sm:grid-cols-2 lg:grid-cols-3">
            {filteredBlogs.map((blog: any, idx: number) => (
              <SingleBlog key={idx} blog={blog} />
            ))}
          </div>
        </div>
        {/* <!-- Technology content end --> */}
      </div>
      {/* <!-- Blog Categories Content End --> */}
    </div>
  );
};

export default CategoryMain;
