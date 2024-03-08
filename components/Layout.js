import React, { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import { Toaster } from "react-hot-toast";
import Logo from "./Logo";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Layout({ children }) {
  const [loaderHide, setLoaderHide] = useState(false);

  const loaded = () => {
    if (typeof window !== "undefined") {
      setLoaderHide(true);
    }
  };

  useEffect(() => {
    loaded();
    AOS.init({
      once: false,
    });
  }, []);

  return (
    <div className="w-screen h-screen flex items-center justify-center relative overflow-hidden">
      <Loader hide={loaderHide} />
      <div>
        <Toaster />
      </div>
      <div className="absolute z-0 w-full h-full bg-cover bg-left bg-[url('https://mir-s3-cdn-cf.behance.net/project_modules/1400/dd4b4257665325.59de8a675a18e.jpg')]"></div>
      <div className="absolute z-20 w-full h-full backgronud-login"></div>
      <div className="w-14 flex justify-center items-center absolute z-50 top-4 right-4">
        <Logo />
      </div>
      {children}
    </div>
  );
}
