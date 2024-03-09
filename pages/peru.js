import Link from "next/link";
import React from "react";

export default function PeruPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <p>Aqui van las imagenes de Peru</p>
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
          return
        </Link>
      </div>
    </div>
  );
}
