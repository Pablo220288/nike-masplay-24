import Loader from "@/components/Loader";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import SignIn from "./auth/signin";
import { useSession } from "next-auth/react";

export default function ChilePage() {
  const [loaderHide, setLoaderHide] = useState(false);
  const [loaderHidden, setLoaderHidden] = useState(false);

  const text = "return";

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
console.log(setLoaderHidden)
  return (
    <div className="bg-black flex flex-col w-full items-center relative">
      <div
        className={
          loaderHidden === true
            ? "hidden"
            : "flex items-center justify-center"
        }
      >
        <Loader hide={loaderHide} />
      </div>
      <div>
        <img src="/assets/chile/1-ALTA.jpg/" alt="Chile1" />
      </div>
      <div>
        <img src="/assets/chile/2-ALTA.jpg/" alt="Chile2" />
      </div>
      <div>
        <img src="/assets/chile/3-ALTA.jpg/" alt="Chile3" />
      </div>
      <div>
        <img src="/assets/chile/4-ALTA.jpg/" alt="Chile4" />
      </div>
      <div>
        <img src="/assets/chile/4B-ALTA.jpg/" alt="Chile5" />
      </div>
      <div>
        <img src="/assets/chile/5-ALTA.jpg/" alt="Chile6" />
      </div>
      <div>
        <img src="/assets/chile/6-ALTA.jpg/" alt="Chile7" />
      </div>
      <div>
        <img src="/assets/chile/7-ALTA.jpg/" alt="Chile8" />
      </div>
      <div>
        <img src="/assets/chile/8-ALTA.jpg/" alt="Chile9" />
      </div>
      <div>
        <img src="/assets/chile/9-ALTA.jpg/" alt="Chile10" />
      </div>
      <div>
        <img src="/assets/chile/10-ALTA.jpg/" alt="Chile11" />
      </div>
      <div>
        <img src="/assets/chile/11-ALTA.jpg/" alt="Chile12" />
      </div>
      <div>
        <img src="/assets/chile/12-ALTA.jpg/" alt="Chile13" />
      </div>
      <div>
        <img src="/assets/chile/13-ALTA.jpg/" alt="Chile14" />
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
