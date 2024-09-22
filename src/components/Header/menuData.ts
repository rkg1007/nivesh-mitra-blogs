import { Menu } from "@/types/menu";
const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
    submenu: [
      {
        id: 11,
        title: "Business Blog",
        newTab: false,
        path: "/",
      },
    ],
  },

  {
    id: 2,
    title: "Pages",
    newTab: false,
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
    submenu: [
      {
        id: 201,
        title: "All Blogs",
        newTab: false,
        path: "/",
      },
      {
        id: 202,
        title: "Personal Finance Blogs",
        newTab: false,
        path: "/category/finance",
      },
      {
        id: 203,
        title: "Mutual Funds Blogs",
        newTab: false,
        path: "/category/mutual-funds",
      },
      {
        id: 204,
        title: "Archived Blogs",
        newTab: false,
        path: "/archive",
      },
    ],
  },
];

export default menuData;
