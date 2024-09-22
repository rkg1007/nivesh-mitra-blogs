import React from "react";
import SingleBlog from "@/components/Common/SingleBlog";

const CategoryPage = async () => {
  return (
    <>
      <main>
        <section className="pb-17.5 pt-34">
          <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
            <div className="mb-15 text-center">
              <h1 className="mb-3.5 text-heading-6 font-bold capitalize text-dark sm:text-heading-4 lg:text-heading-3">
                finance
              </h1>
              <p>10 Posts</p>
            </div>

            <div className="grid grid-cols-1 gap-x-7.5 gap-y-11 sm:grid-cols-2 lg:grid-cols-3">
              <SingleBlog />
              <SingleBlog />
              <SingleBlog />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default CategoryPage;
