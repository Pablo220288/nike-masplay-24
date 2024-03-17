import Loader from "@/components/Loader";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import SignIn from "./auth/signin";
import { useSession } from "next-auth/react";

export default function PeruPage() {
  const [loaderHide, setLoaderHide] = useState(false);
  const [loaderHidden, setLoaderHidden] = useState(false);

  const { data: session } = useSession();

  const loaded = () => {
    if (typeof window !== "undefined") {
      setLoaderHide(true);

      setTimeout(() => {
        setLoaderHidden(true);
      }, "1500");
    }
  };

  useEffect(() => {
    loaded();
  }, []);

  if (!session) {
    return <SignIn />;
  }
 
  return (
    <div className="bg-black flex flex-col w-full items-center relative">
      <div
        className={
          loaderHidden === true ? "hidden" : "flex items-center justify-center"
        }
      >
        <Loader hide={loaderHide} />
      </div>
      <div className="max-w-[1080px]">
        <img src="/assets/peru/0.jpg/" alt="Retail Info CPeru1" />
      </div>
      <div className="max-w-[1080px]">
        <img src="/assets/peru/1.webp/" alt="Retail Info CPeru2" />
      </div>
      <div className="max-w-[1080px]">
        <img src="/assets/peru/2.jpg/" alt="Retail Info CPeru3" />
      </div>
      <div className="max-w-[1080px]">
        <img src="/assets/peru/3.webp/" alt="Retail Info CPeru4" />
      </div>
      <div className="max-w-[1080px]">
        <img src="/assets/peru/4.webp/" alt="Retail Info CPeru5" />
      </div>
      <div className="max-w-[1080px]">
        <img src="/assets/peru/6.jpg/" alt="Retail Info CPeru6" />
      </div>
      <div className="max-w-[1080px]">
        <img src="/assets/peru/7.webp/" alt="Retail Info CPeru7" />
      </div>
      <div className="max-w-[1080px]">
        <img src="/assets/peru/8.jpg/" alt="Retail Info CPeru8" />
      </div>
      <div className="max-w-[1080px]">
        <img src="/assets/peru/9.webp/" alt="Retail Info CPeru9" />
      </div>
      <div className="max-w-[1080px]">
        <img src="/assets/peru/10.webp/" alt="Retail Info Peru 10" />
      </div>
      <div className="max-w-[1080px]">
        <img src="/assets/peru/11.webp/" alt="Retail Info Peru 11" />
      </div>
      <div className="max-w-[1080px]">
        <img src="/assets/peru/14.jpg/" alt="Retail Info Peru 12" />
      </div>
      <div className="max-w-[1080px]">
        <img src="/assets/peru/15.webp/" alt="Retail Info Peru 13" />
      </div>
      <div className="max-w-[1080px]">
        <img src="/assets/peru/16.webp/" alt="Retail Info Peru 13" />
      </div>
      <div className="max-w-[1080px]">
        <img src="/assets/peru/17.webp/" alt="Retail Info Peru 13" />
      </div>
      <div className="max-w-[1080px]">
        <img src="/assets/peru/18.webp/" alt="Retail Info Peru 13" />
      </div>
      <div className="max-w-[1080px]">
        <img src="/assets/peru/19.webp/" alt="Retail Info Peru 13" />
      </div>
      <div className="fixed z-10 top-5 left-5 bg-black py-2 pr-4 pl-2 rounded-sm flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-4 h-4 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
        <Link
          href={"/"}
          className="text-xl text-druk tracking-wider uppercase italic text-white flex items-center"
        >
          back
        </Link>
      </div>
    </div>
  );
}
