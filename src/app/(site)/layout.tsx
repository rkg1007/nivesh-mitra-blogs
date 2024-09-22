"use client";
import PreLoader from "@/components/Common/PreLoader";
import ScrollToTop from "@/components/Common/ScrollToTop";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useEffect, useState } from "react";
import ToasterContext from "../context/ToastContext";
import "../globals.css";
import "../prism-theme.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {loading ? (
          <PreLoader />
        ) : (
          <>
            <Header />
            <ToasterContext />
            {children}
            <Footer />
            <ScrollToTop />
          </>
        )}
      </body>
    </html>
  );
}
