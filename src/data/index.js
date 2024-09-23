import { blogs } from "./blogs";

export const getBlogs = () => {
  blogs.sort((a, b) => {
    if (new Date(a) < new Date(b)) return -1;
    return 1;
  });
  return blogs;
};

export const getUniqueCategories = () => {
  const categoryObject = {};
  blogs.forEach((blog) => {
    categoryObject[blog.category] = true;
  });
  return Object.keys(categoryObject);
};

export const filterBlogsByCategory = (category) => {
  const blogs = getBlogs();
  if (category == "all") return blogs;
  return blogs.filter(
    (blog) => blog.category.toLowerCase() == category.toLowerCase()
  );
};
