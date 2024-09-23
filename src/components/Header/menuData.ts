import { Menu } from "@/types/menu";
const menuData: Menu[] = [
  {
    id: 2,
    title: "Pages",
    newTab: false,
    path: "/",
    submenu: [
      {
        id: 301,
        title: "About Us",
        newTab: false,
        path: "/about",
      },

      {
        id: 36,
        title: "Privacy & Policy Page",
        newTab: false,
        path: "/privacy-policy",
      },
      {
        id: 36,
        title: "Error Page",
        newTab: false,
        path: "/error",
      },
    ],
  },

  {
    id: 3,
    title: "Blogs",
    newTab: false,
    path: "/",
    submenu: [
      {
        id: -1,
        title: "All",
        newTab: false,
        path: "/?category=all",
      },
    ],
  },
];

export default menuData;
