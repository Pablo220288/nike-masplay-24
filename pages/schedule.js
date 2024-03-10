import Layout from "@/components/Layout";
import Link from "next/link";
import React from "react";

export default function SchedulePage() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center w-full h-screen absolute z-50">
        <div className="w-full px-12">
          <span className="text-xl text-druk tracking-wider uppercase">
            SUN 17/03
          </span>

          <table className="basic mt-2">
            <thead>
              <tr>
                <td></td>
                <td></td>
                <td className="border-l">Item</td>
                <td className="border-l">Assistants</td>
                <td className="border-l">Location</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ARRIVALS</td>
                <td className="border-l border-gray-900">Night</td>
                <td className="border-l border-gray-900">
                  Arrivals to Lima
                </td>
                <td className="border-l border-gray-900">NIKE LATAM</td>
                <td className="border-l border-gray-900">JW Marriott</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="fixed z-50 top-5 left-5 bg-black py-2 pr-4 pl-2 rounded-sm flex items-center gap-2">
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
    </Layout>
  );
}
