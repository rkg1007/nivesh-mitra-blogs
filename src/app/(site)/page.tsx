import { Metadata } from "next";
import Category from "@/components/Home/Category";

export const metadata: Metadata = {
  title: "Nivesh Mitra Blogs",
  description: "This is Blog page for Nivesh Mitra",
};

export default function Home() {
  return <Category />;
}
