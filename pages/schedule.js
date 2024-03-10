import Layout from "@/components/Layout";
import Link from "next/link";
import React from "react";

export default function SchedulePage() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center w-full h-screen absolute z-50">
        <div className="schedule-grid">
          <div className="grid-rows-1 col-start-1 col-end-2">
            <span className="text-nowrap text-[25px] text-druk tracking-wider uppercase">
              Sunday 17/03
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
              Monday 18/03
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
            09:00-10:00
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
            10:00-11:30
          </div>
          <div className="grid-rows-4 col-start-2 col-end-2 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-r border-t py-2">
            Lima Consumer Review & Peru Marketplace
          </div>
          <div className="grid-rows-4 col-start-3 col-end-3 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-r border-t py-2">
            NIKE LATAM - RR/RM - EQUINOX ANDINA*
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
            NIKE LATAM - RR/RM - EQUINOX ANDINA*
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
            11:40-12:00
          </div>
          <div className="grid-rows-4 col-start-2 col-end-2 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-r py-2">
            Larcomar
          </div>
          <div className="grid-rows-4 col-start-3 col-end-3 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-r py-2">
            NIKE LATAM - RR/RM - EQUINOX ANDINA*
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
            NIKE LATAM - RR/RM - EQUINOX ANDINA*
          </div>
          <div className="grid-rows-4 col-start-4 col-end-4 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-t py-2">
            {" "}
          </div>
          <div className="grid-rows-4 col-start-1 col-end-1 flex items-center justify-end text-xs text-center uppercase border-gray-900 py-2 pr-4">
            12:10-12:40
          </div>
          <div className="grid-rows-4 col-start-2 col-end-2 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-r border-t py-2">
            Marathon Miraflores
          </div>
          <div className="grid-rows-4 col-start-3 col-end-3 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-r border-t py-2">
            NIKE LATAM - RR/RM - EQUINOX ANDINA*
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
            NIKE LATAM - RR/RM - EQUINOX ANDINA*
          </div>
          <div className="grid-rows-4 col-start-4 col-end-4 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-t py-2">
            {" "}
          </div>
          <div className="grid-rows-4 col-start-1 col-end-1 flex items-center justify-end text-xs text-center uppercase border-gray-900 py-2 pr-4">
            13:00-13:30
          </div>
          <div className="grid-rows-4 col-start-2 col-end-2 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-r border-t py-2">
            NVS Plaza Santa Catalina
          </div>
          <div className="grid-rows-4 col-start-3 col-end-3 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-r border-t py-2">
            NIKE LATAM - RR/RM - EQUINOX ANDINA*
          </div>
          <div className="grid-rows-4 col-start-4 col-end-4 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-t py-2">
            {" "}
          </div>
          <div className="grid-rows-4 col-start-1 col-end-1 flex items-center justify-end text-xs text-center uppercase border-gray-900 py-2 pr-4">
            13:30
          </div>
          <div className="grid-rows-4 col-start-2 col-end-2 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-r border-t py-2">
            Depart to Jockey Plaza
          </div>
          <div className="grid-rows-4 col-start-3 col-end-3 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-r border-t py-2">
            NIKE LATAM - RR/RM - EQUINOX ANDINA*
          </div>
          <div className="grid-rows-4 col-start-4 col-end-4 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-t py-2">
            {" "}
          </div>
          {/*item 3*/}
          <div className="col-start-1 col-end-4 py-2"> </div>
          <div className="grid-rows-2 col-start-1 col-end-1 text-center">
            <span className="text-nowrap text-[20px] text-druk tracking-wider uppercase">
              LUNCH
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
            14:00-15:15
          </div>
          <div className="grid-rows-4 col-start-2 col-end-2 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-r py-2">
            Lunch at Jockey Plaza
          </div>
          <div className="grid-rows-4 col-start-3 col-end-3 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-r py-2">
            NIKE LATAM - RR/RM - EQUINOX ANDINA*
          </div>
          <div className="grid-rows-4 col-start-4 col-end-4 flex items-center justify-center text-xs text-center uppercase border-gray-900 py-2">
            Jockey Plaza
          </div>
          {/*item 4*/}
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
            15:15-17:00
          </div>
          <div className="grid-rows-4 col-start-2 col-end-2 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-r py-2">
            Jockey Plaza
          </div>
          <div className="grid-rows-4 col-start-3 col-end-3 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-r py-2">
            NIKE LATAM - RR/RM - EQUINOX ANDINA*
          </div>
          <div className="grid-rows-4 col-start-4 col-end-4 flex items-center justify-center text-xs text-center uppercase border-gray-900 py-2">
            {" "}
          </div>
          <div className="grid-rows-4 col-start-1 col-end-1 flex items-center justify-end text-xs text-center uppercase border-gray-900 py-2 pr-4">
            17:00
          </div>
          <div className="grid-rows-4 col-start-2 col-end-2 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-r border-t py-2">
            Depart to Hotel
          </div>
          <div className="grid-rows-4 col-start-3 col-end-3 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-r border-t py-2">
            NIKE LATAM - RR/RM - EQUINOX ANDINA*
          </div>
          <div className="grid-rows-4 col-start-4 col-end-4 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-t py-2">
            {" "}
          </div>
          <div className="grid-rows-4 col-start-1 col-end-1 flex items-center justify-end text-xs text-center uppercase border-gray-900 py-2 pr-4">
            17:45
          </div>
          <div className="grid-rows-4 col-start-2 col-end-2 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-r border-t py-2">
            Refresh at Hotel
          </div>
          <div className="grid-rows-4 col-start-3 col-end-3 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-r border-t py-2">
            NIKE LATAM - RR/RM - EQUINOX ANDINA*
          </div>
          <div className="grid-rows-4 col-start-4 col-end-4 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-t py-2">
            {" "}
          </div>
          {/*item 5*/}
          <div className="col-start-1 col-end-4 py-2"> </div>
          <div className="grid-rows-2 col-start-1 col-end-1 text-center">
            <span className="text-nowrap text-[20px] text-druk tracking-wider uppercase">
              DINNER
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
            19:00
          </div>
          <div className="grid-rows-4 col-start-2 col-end-2 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-r py-2">
            Depart to Dinner
          </div>
          <div className="grid-rows-4 col-start-3 col-end-3 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-r py-2">
            NIKE LATAM - RR/RM - EQUINOX ANDINA*
          </div>
          <div className="grid-rows-4 col-start-4 col-end-4 flex items-center justify-center text-xs text-center uppercase border-gray-900 py-2">
            {" "}
          </div>
          <div className="grid-rows-4 col-start-1 col-end-1 flex items-center justify-end text-xs text-center uppercase border-gray-900 py-2 pr-4">
            19:30
          </div>
          <div className="grid-rows-4 col-start-2 col-end-2 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-r border-t py-2">
            Dinner at AmoraMar
          </div>
          <div className="grid-rows-4 col-start-3 col-end-3 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-r border-t py-2">
            NIKE LATAM - RR/RM - RA
          </div>
          <div className="grid-rows-4 col-start-4 col-end-4 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-t py-2">
            {" "}
          </div>
          {/* Thursday */}
          <div className="grid-rows-1 col-start-1 col-end-2 pt-4">
            <span className="text-nowrap text-[25px] text-druk tracking-wider uppercase">
              Thursday 19/03
            </span>
          </div>
          {/*item 1 */}
          <div className="grid-rows-2 col-start-1 col-end-1 text-center">
            <span className="text-nowrap text-[20px] text-druk tracking-wider uppercase">
              DEPART
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
            06:45
          </div>
          <div className="grid-rows-4 col-start-2 col-end-2 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-r py-2">
            Depart to Airport (Flight LA2697 09:35am)
          </div>
          <div className="grid-rows-4 col-start-3 col-end-3 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-r py-2">
            NIKE LATAM - RR/RM - EQUINOX ANDINA*
          </div>
          <div className="grid-rows-4 col-start-4 col-end-4 flex items-center justify-center text-xs text-center uppercase border-gray-900 py-2">
            {" "}
          </div>
          {/*item 2*/}
          <div className="col-start-1 col-end-4 py-2"> </div>
          <div className="grid-rows-2 col-start-1 col-end-1 text-center">
            <span className="text-nowrap text-[20px] text-druk tracking-wider uppercase">
              ARRIVALS
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
            16:00
          </div>
          <div className="grid-rows-4 col-start-2 col-end-2 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-r py-2">
            Arrival to Hotel in Santiago
          </div>
          <div className="grid-rows-4 col-start-3 col-end-3 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-r py-2">
            NIKE LATAM - RR/RM - EQUINOX ANDINA
          </div>
          <div className="grid-rows-4 col-start-4 col-end-4 flex items-center justify-center text-xs text-center uppercase border-gray-900 py-2">
            Hyatt Centric
          </div>
          {/*item 3*/}
          <div className="col-start-1 col-end-4 py-2"> </div>
          <div className="grid-rows-2 col-start-1 col-end-1 text-center">
            <span className="text-nowrap text-[20px] text-druk tracking-wider uppercase">
              CONSUMER
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
            17:00-20:00
          </div>
          <div className="grid-rows-4 col-start-2 col-end-2 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-r py-2">
            Costanera &quot;Consumer & City Insights&quot;
          </div>
          <div className="grid-rows-4 col-start-3 col-end-3 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-r py-2">
            NIKE LATAM - RR/RM - EQUINOX ANDINA
          </div>
          <div className="grid-rows-4 col-start-4 col-end-4 flex items-center justify-center text-xs text-center uppercase border-gray-900 py-2">
            Costanera Center
          </div>
          {/*item 4*/}
          <div className="col-start-1 col-end-4 py-2"> </div>
          <div className="grid-rows-2 col-start-1 col-end-1 text-center">
            <span className="text-nowrap text-[20px] text-druk tracking-wider uppercase">
              DINNER
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
            20:00
          </div>
          <div className="grid-rows-4 col-start-2 col-end-2 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-r py-2">
            Depart to Dinner
          </div>
          <div className="grid-rows-4 col-start-3 col-end-3 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-r py-2">
            NIKE LATAM - RR/RM - EQUINOX ANDINA
          </div>
          <div className="grid-rows-4 col-start-4 col-end-4 flex items-center justify-center text-xs text-center uppercase border-gray-900 py-2">
            {" "}
          </div>
          <div className="grid-rows-4 col-start-1 col-end-1 flex items-center justify-end text-xs text-center uppercase border-gray-900 py-2 pr-4">
            20:15
          </div>
          <div className="grid-rows-4 col-start-2 col-end-2 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-r border-t py-2">
            Dinner at Mestizo
          </div>
          <div className="grid-rows-4 col-start-3 col-end-3 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-r border-t py-2">
            NIKE LATAM - RR/RM - EQUINOX ANDINA
          </div>
          <div className="grid-rows-4 col-start-4 col-end-4 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-t py-2">
            Mestizo
          </div>
          {/* Wednesday */}
          <div className="grid-rows-1 col-start-1 col-end-2 pt-4">
            <span className="text-nowrap text-[25px] text-druk tracking-wider uppercase">
              Wednesday 20/03
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
            09:00-09:30
          </div>
          <div className="grid-rows-4 col-start-2 col-end-2 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-r border-b py-2">
            Meet & Greet Nike Office
          </div>
          <div className="grid-rows-4 col-start-3 col-end-3 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-r border-b py-2">
            NIKE LATAM - RR/RM - EQUINOX ANDINA
          </div>
          <div className="grid-rows-4 col-start-4 col-end-4 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-b py-2">
            Nike Office
          </div>
          <div className="grid-rows-4 col-start-1 col-end-1 flex items-center justify-end text-xs text-center uppercase border-gray-900 py-2 pr-4">
            09:30-11:30
          </div>
          <div className="grid-rows-4 col-start-2 col-end-2 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-r border-b py-2">
            Equinox Andina Biz Review
          </div>
          <div className="grid-rows-4 col-start-3 col-end-3 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-r border-b py-2">
            NIKE LATAM - RR/RM - EQUINOX ANDINA
          </div>
          <div className="grid-rows-4 col-start-4 col-end-4 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-b py-2">
            Nike Office
          </div>
          <div className="grid-rows-4 col-start-1 col-end-1 flex items-center justify-end text-xs text-center uppercase border-gray-900 py-2 pr-4">
            11:30
          </div>
          <div className="grid-rows-4 col-start-2 col-end-2 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-r py-2">
            Depart to Parque Arauco
          </div>
          <div className="grid-rows-4 col-start-3 col-end-3 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-r py-2">
            NIKE LATAM - RR/RM - EQUINOX ANDINA
          </div>
          <div className="grid-rows-4 col-start-4 col-end-4 flex items-center justify-center text-xs text-center uppercase border-gray-900 py-2">
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
            12:00-13:00
          </div>
          <div className="grid-rows-4 col-start-2 col-end-2 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-r py-2">
            Nike Store Parque Arauco - Marathon 1st Door
          </div>
          <div className="grid-rows-4 col-start-3 col-end-3 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-r py-2">
            NIKE LATAM - RR/RM - EQUINOX ANDINA
          </div>
          <div className="grid-rows-4 col-start-4 col-end-4 flex items-center justify-center text-xs text-center uppercase border-gray-900 py-2">
            Parque Arauco
          </div>
          {/*item 3*/}
          <div className="col-start-1 col-end-4 py-2"> </div>
          <div className="grid-rows-2 col-start-1 col-end-1 text-center">
            <span className="text-nowrap text-[20px] text-druk tracking-wider uppercase">
              LUNCH
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
            13:00-14:00
          </div>
          <div className="grid-rows-4 col-start-2 col-end-2 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-r py-2">
            Lunch at Margo
          </div>
          <div className="grid-rows-4 col-start-3 col-end-3 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-r py-2">
            NIKE LATAM - RR/RM - EQUINOX ANDINA*
          </div>
          <div className="grid-rows-4 col-start-4 col-end-4 flex items-center justify-center text-xs text-center uppercase border-gray-900 py-2">
            Parque Arauco
          </div>
          {/*item 4*/}
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
            14:00
          </div>
          <div className="grid-rows-4 col-start-2 col-end-2 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-r border-b py-2">
            Depart to NVS Buenaventura
          </div>
          <div className="grid-rows-4 col-start-3 col-end-3 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-r border-b py-2">
            NIKE LATAM - RR/RM - EQUINOX ANDINA
          </div>
          <div className="grid-rows-4 col-start-4 col-end-4 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-b py-2">
            {" "}
          </div>
          <div className="grid-rows-4 col-start-1 col-end-1 flex items-center justify-end text-xs text-center uppercase border-gray-900 py-2 pr-4">
            14:30-15:00
          </div>
          <div className="grid-rows-4 col-start-2 col-end-2 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-r py-2">
            NVS Buenaventura
          </div>
          <div className="grid-rows-4 col-start-3 col-end-3 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-r py-2">
            NIKE LATAM - RR/RM - EQUINOX ANDINA
          </div>
          <div className="grid-rows-4 col-start-4 col-end-4 flex items-center justify-center text-xs text-center uppercase border-gray-900 py-2">
            Outlet Buenaventura
          </div>
          {/*item 5*/}
          <div className="col-start-1 col-end-4 py-2"> </div>
          <div className="grid-rows-2 col-start-1 col-end-1 text-center">
            <span className="text-nowrap text-[20px] text-druk tracking-wider uppercase">
              DEPART
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
            15:00
          </div>
          <div className="grid-rows-4 col-start-2 col-end-2 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-r py-2">
            Depart to Airport
          </div>
          <div className="grid-rows-4 col-start-3 col-end-3 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-r py-2">
            NIKE LATAM
          </div>
          <div className="grid-rows-4 col-start-4 col-end-4 flex items-center justify-center text-xs text-center uppercase border-gray-900 py-2">
            {" "}
          </div>
          <div className="grid-rows-4 col-start-1 col-end-1 flex items-center justify-end text-xs text-center uppercase border-gray-900 py-2 pr-4">
            15:30
          </div>
          <div className="grid-rows-4 col-start-2 col-end-2 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-r border-t py-2">
            Airport - (Flight to BA LA657 18:07hrs)
          </div>
          <div className="grid-rows-4 col-start-3 col-end-3 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-r border-t py-2">
            NIKE LATAM
          </div>
          <div className="grid-rows-4 col-start-4 col-end-4 flex items-center justify-center text-xs text-center uppercase border-gray-900 border-t py-2">
            Airport
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
