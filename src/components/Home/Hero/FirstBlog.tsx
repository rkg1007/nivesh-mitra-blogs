import React from "react";
import Image from "next/image";
import Link from "next/link";

const FirstBlog = () => {
  return (
    <div className="flex w-full max-w-[1170px] flex-col gap-7.5 rounded-xl bg-white p-4 shadow-1 lg:flex-row lg:items-center lg:gap-11 lg:p-2.5">
      <div className=" relative aspect-[536/320] w-full">
        <Link href={"/blogs-details/blog-details-one"}>
          <Image
            className="w-full rounded-lg object-cover"
            src={"/images/blog/blog-01.png"}
            alt={"Some Alt Text"}
            fill
            loading="eager"
          />
        </Link>
      </div>

      <div className="w-full lg:max-w-[540px]">
        <Link
          href={`/category/finance`}
          className="mb-4 inline-flex rounded-full bg-purple/[0.08] px-3 py-1 text-sm font-medium capitalize text-purple-dark"
        >
          finance
        </Link>
        <h1 className="mb-4 text-custom-4 font-bold text-dark xl:text-heading-4">
          <Link href={"/blog-details/blog-details-one"}>
            Lorem Ipsum is simply dummy text
          </Link>
        </h1>
        <p className="max-w-[524px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <div className="mt-5 flex items-center gap-2.5">
          <p className="text-sm">
            {new Date().toDateString().split(" ").slice(1).join(" ")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FirstBlog;
