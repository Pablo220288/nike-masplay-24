import Layout from "@/components/Layout";
import Link from "next/link";
import React from "react";

export default function SchedulePage() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center w-full h-screen absolute z-50">
        <div className="schedule-grid ">
          <div className="grid-rows-1 col-start-1 col-end-2">
            <span className="text-nowrap text-[25px] text-druk tracking-wider uppercase">
              SUNDAY 17/03
            </span>
          </div>
          <div className="grid-rows-2 col-start-1 col-end-1 text-center">
            <span className="text-nowrap text-[20px] text-druk tracking-wider uppercase">
              ARRIVALS
            </span>
          </div>
          <div className="grid-rows-2 col-start-2 col-end-2 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-r border-b">
            Item
          </div>
          <div className="grid-rows-2 col-start-3 col-end-3 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-r border-b">
            Assistants
          </div>
          <div className="grid-rows-2 col-start-4 col-end-4 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-b">
            Location
          </div>
          <div className="grid-rows-3 col-start-1 col-end-1 flex items-center justify-end text-xs text-center uppercase border-gray-900 py-2 pr-4">
            Night
          </div>
          <div className="grid-rows-3 col-start-2 col-end-2 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-r py-2">
            Arrivals to Lima
          </div>
          <div className="grid-rows-3 col-start-3 col-end-3 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-r py-2">
            NIKE LATAM
          </div>
          <div className="grid-rows-4 col-start-4 col-end-4 flex items-center justify-center text-xs text-center uppercase border-gray-900 py-2">
            JW Marriott
          </div>
          {/* monday */}
          <div className="grid-rows-1 col-start-1 col-end-2 pt-4">
            <span className="text-nowrap text-[25px] text-druk tracking-wider uppercase">
              MONDAY 17/03
            </span>
          </div>
          {/*item 1 */}
          <div className="grid-rows-2 col-start-1 col-end-1 text-center">
            <span className="text-nowrap text-[20px] text-druk tracking-wider uppercase">
              NIKE OFFICES
            </span>
          </div>
          <div className="grid-rows-3 col-start-2 col-end-2 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-r border-b">
            Item
          </div>
          <div className="grid-rows-3 col-start-3 col-end-3 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-r border-b">
            Assistants
          </div>
          <div className="grid-rows-3 col-start-4 col-end-4 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-b">
            Location
          </div>
          <div className="grid-rows-4 col-start-1 col-end-1 flex items-center justify-end text-xs text-center uppercase border-gray-900 py-2 pr-4">
            09:00- 10:00
          </div>
          <div className="grid-rows-4 col-start-2 col-end-2 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-r py-2">
            Breakfast Meet and Greet
          </div>
          <div className="grid-rows-4 col-start-3 col-end-3 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-r py-2">
            NIKE LATAM - MASPLAY - EQUINOX ANDINA*
          </div>
          <div className="grid-rows-4 col-start-4 col-end-4 flex items-center justify-center text-xs text-center uppercase border-gray-900 py-2">
            Nike Office
          </div>
          <div className="grid-rows-4 col-start-1 col-end-1 flex items-center justify-end text-xs text-center uppercase border-gray-900 py-2 pr-4">
            10:00- 11:30
          </div>
          <div className="grid-rows-4 col-start-2 col-end-2 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-r border-t py-2">
            Lima Consumer Review & Peru Marketplace
          </div>
          <div className="grid-rows-4 col-start-3 col-end-3 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-r border-t py-2">
            NIKE LATAM - MASPLAY - EQUINOX ANDINA*
          </div>
          <div className="grid-rows-4 col-start-4 col-end-4 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-t py-2">
            Nike Office
          </div>
          <div className="grid-rows-4 col-start-1 col-end-1 flex items-center justify-end text-xs text-center uppercase border-gray-900 py-2 pr-4">
            11:30
          </div>
          <div className="grid-rows-4 col-start-2 col-end-2 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-r border-t py-2">
            Depart to Larcomar
          </div>
          <div className="grid-rows-4 col-start-3 col-end-3 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-r border-t py-2">
            NIKE LATAM - MASPLAY - EQUINOX ANDINA*
          </div>
          <div className="grid-rows-4 col-start-4 col-end-4 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-t py-2">
            {" "}
          </div>
          {/*item 2*/}
          <div className="col-start-1 col-end-4 py-2"> </div>
          <div className="grid-rows-2 col-start-1 col-end-1 text-center">
            <span className="text-nowrap text-[20px] text-druk tracking-wider uppercase">
              RETAIL TOUR
            </span>
          </div>
          <div className="grid-rows-3 col-start-2 col-end-2 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-r border-b">
            Item
          </div>
          <div className="grid-rows-3 col-start-3 col-end-3 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-r border-b">
            Assistants
          </div>
          <div className="grid-rows-3 col-start-4 col-end-4 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-b">
            Location
          </div>
          <div className="grid-rows-4 col-start-1 col-end-1 flex items-center justify-end text-xs text-center uppercase border-gray-900 py-2 pr-4">
            11:40- 12:00
          </div>
          <div className="grid-rows-4 col-start-2 col-end-2 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-r py-2">
            Larcomar
          </div>
          <div className="grid-rows-4 col-start-3 col-end-3 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-r py-2">
            NIKE LATAM - MASPLAY - EQUINOX ANDINA*
          </div>
          <div className="grid-rows-4 col-start-4 col-end-4 flex items-center justify-center text-xs text-center uppercase border-gray-900 py-2">
            Larcomar
          </div>
          <div className="grid-rows-4 col-start-1 col-end-1 flex items-center justify-end text-xs text-center uppercase border-gray-900 py-2 pr-4">
            12:00
          </div>
          <div className="grid-rows-4 col-start-2 col-end-2 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-r border-t py-2">
            Depart to Marathon Miraflores
          </div>
          <div className="grid-rows-4 col-start-3 col-end-3 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-r border-t py-2">
            NIKE LATAM - MASPLAY - EQUINOX ANDINA*
          </div>
          <div className="grid-rows-4 col-start-4 col-end-4 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-t py-2">
            {" "}
          </div>
          <div className="grid-rows-4 col-start-1 col-end-1 flex items-center justify-end text-xs text-center uppercase border-gray-900 py-2 pr-4">
            12:10- 12:40
          </div>
          <div className="grid-rows-4 col-start-2 col-end-2 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-r border-t py-2">
            Marathon Miraflores
          </div>
          <div className="grid-rows-4 col-start-3 col-end-3 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-r border-t py-2">
            NIKE LATAM - MASPLAY - EQUINOX ANDINA*
          </div>
          <div className="grid-rows-4 col-start-4 col-end-4 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-t py-2">
            Miraflores
          </div>
          <div className="grid-rows-4 col-start-1 col-end-1 flex items-center justify-end text-xs text-center uppercase border-gray-900 py-2 pr-4">
            12:40
          </div>
          <div className="grid-rows-4 col-start-2 col-end-2 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-r border-t py-2">
            Depart to NVS Plaza Santa Catalina
          </div>
          <div className="grid-rows-4 col-start-3 col-end-3 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-r border-t py-2">
            NIKE LATAM  MASPLAY  EQUINOX ANDINA*
          </div>
          <div className="grid-rows-4 col-start-4 col-end-4 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-t py-2">
            {" "}
          </div>
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
