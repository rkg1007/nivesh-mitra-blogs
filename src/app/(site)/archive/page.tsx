import React from "react";
import { Metadata } from "next";
import SingleBlog from "@/components/Common/SingleBlog";

export const metadata: Metadata = {
  title: "Archive | NextBlog - Next.js Blog Template",
  description: "This is archive page for NextBlog",
};

const ArchivePage = async () => {
  return (
    <main>
      <section className="pb-17.5 pt-34">
        <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
          <div className="mb-15 text-center">
            <h1 className="mb-3.5 text-heading-6 font-bold text-dark sm:text-heading-4 lg:text-heading-3">
              Archive
            </h1>
            <p>See all posts we have ever written.</p>
          </div>

          <div className="grid grid-cols-1 gap-x-7.5 gap-y-11 sm:grid-cols-2 lg:grid-cols-3">
            <SingleBlog key={1} />
            <SingleBlog key={2} />
            <SingleBlog key={3} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default ArchivePage;
