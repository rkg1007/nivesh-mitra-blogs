"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const SingleBlog = () => {
  return (
    <div className="flex w-full flex-col gap-6 rounded-xl bg-white p-2.5 shadow-1 sm:flex-row sm:items-center lg:max-w-[570px]">
      <div className="relative aspect-[238/180] w-full overflow-hidden">
        <Link href={"/blogs-details/blog-details-one"}>
          <Image
            className="w-full rounded-lg object-cover"
            src={"/images/blog/blog-01.png"}
            alt={"Some Alt Text"}
            fill
          />
        </Link>
      </div>

      <div className="w-full lg:max-w-[272px]">
        <Link
          href={`/category/finance`}
          className="mb-4 inline-flex rounded-full bg-blue/[0.08] px-3 py-1 text-sm font-medium capitalize text-blue"
        >
          finance
        </Link>
        <h2 className="mb-3 text-custom-lg font-semibold text-dark">
          <Link href={"/blog-details/blog-details-two"}>
            Lorem Ipsum is simply dummy text
          </Link>
        </h2>
        <div className="flex items-center gap-2.5">
          <p className="text-sm">
            {new Date().toDateString().split(" ").slice(1).join(" ")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
