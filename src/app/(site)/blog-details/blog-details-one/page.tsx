import RenderBodyContent from "@/components/Blog/RenderBodyContent";
import NewsletterSignup from "@/components/Common/NewsletterSignup";
import Image from "next/image";
import Link from "next/link";

const BlogDetailsOne = async () => {
  return (
    <>
      <main>
        <section className="pb-17.5 pt-31.5">
          <div className="mx-auto max-w-[1030px] px-4 sm:px-8 xl:px-0">
            <div className="mx-auto max-w-[770px] text-center">
              <Link
                href={`/category/finance`}
                className="mb-1 inline-flex rounded-full bg-blue/[0.08] px-3 py-1 text-custom-sm font-medium capitalize text-blue"
              >
                finance
              </Link>
              <h1 className="mb-5 text-2xl font-bold text-dark sm:text-4xl lg:text-custom-2">
                Lorem Ipsum is simply dummy tex
              </h1>
              <p className="text-body">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>

              <div className="mt-7.5 flex items-center justify-center gap-4">
                <div className="text-left">
                  <div className="flex items-center gap-1.5">
                    <p>
                      {new Date().toDateString().split(" ").slice(1).join(" ")}
                    </p>
                    <span className="flex h-[3px] w-[3px] rounded-full bg-dark-2"></span>
                    <p>1 min read</p>
                  </div>
                </div>
              </div>
            </div>

            <Image
              src={"/images/blog/blog-01.png"}
              alt={"Some Alt Text"}
              className="mb-11 mt-10 rounded-lg"
              width={1030}
              height={550}
            />

            <div className="mx-auto max-w-[770px]">
              <div className="blog-details blog-details-one">
                <RenderBodyContent />
              </div>

              {/* <!-- Blog Show More BTN --> */}
              <button className="mx-auto flex justify-center">
                <Link
                  href={`/archive`}
                  className="mt-10 rounded-md border border-dark px-7.5 py-3 font-medium text-dark duration-200 ease-in hover:bg-dark  hover:text-white"
                >
                  View all Posts
                </Link>
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default BlogDetailsOne;
