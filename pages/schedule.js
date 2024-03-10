import Layout from "@/components/Layout";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const sunday = [
  {
    event: "ARRIVALS",
    items: [
      {
        hs: "Night",
        item: "Arrivals to Lima",
        assistants: "NIKE LATAM",
        location: "JW Marriott",
      },
    ],
  },
];

const monday = [
  {
    event: "NIKE OFFICES",
    items: [
      {
        hs: "09:00- 10:00",
        item: "Breakfast Meet and Greet",
        assistants: "NIKE LATAM - MASPLAY - EQUINOX ANDINA*",
        location: "Nike Office",
      },
      {
        hs: "10:00- 11:30",
        item: "Lima Consumer Review & Peru Marketplace",
        assistants: "NIKE LATAM - MASPLAY - EQUINOX ANDINA*",
        location: "Nike Office",
      },
      {
        hs: "11:30",
        item: "Depart to Larcomar",
        assistants: "NIKE LATAM - MASPLAY - EQUINOX ANDINA*",
        location: "-",
      },
    ],
  },
  {
    event: "RETAIL TOUR",
    items: [
      {
        hs: "11:40- 12:00",
        item: "Larcomar",
        assistants: "NIKE LATAM - MASPLAY - EQUINOX ANDINA*",
        location: "Larcomar",
      },
      {
        hs: "12:00",
        item: "Depart to Marathon Miraflores",
        assistants: "NIKE LATAM - MASPLAY - EQUINOX ANDINA*",
        location: "-",
      },
      {
        hs: "12:40",
        item: "Depart to NVS Plaza Santa Catalina",
        assistants: "NIKE LATAM - MASPLAY - EQUINOX ANDINA*",
        location: "-",
      },
      {
        hs: "13:00-13:30",
        item: "NVS Plaza Santa Catalina",
        assistants: "NIKE LATAM - MASPLAY - EQUINOX ANDINA*",
        location: "-",
      },
      {
        hs: "13:30",
        item: "Depart to Jockey Plaza",
        assistants: "NIKE LATAM - MASPLAY - EQUINOX ANDINA*",
        location: "-",
      },
      {
        hs: "12:00",
        item: "Depart to Marathon Miraflores",
        assistants: "NIKE LATAM - MASPLAY - EQUINOX ANDINA*",
        location: "-",
      },
    ],
  },
  {
    event: "LUNCH",
    items: [
      {
        hs: "14:00-15:15",
        item: "Lunch at Jockey Plaza",
        assistants: "NIKE LATAM - RR/RM - EQUINOX ANDINA*",
        location: "Jockey Plaza",
      },
    ],
  },
  {
    event: "RETAIL TOUR",
    items: [
      {
        hs: "15:15-17:00",
        item: "Jockey Plaza",
        assistants: "NIKE LATAM - MASPLAY - EQUINOX ANDINA*",
        location: "-",
      },
      {
        hs: "17:00",
        item: "Depart to Hotel",
        assistants: "NIKE LATAM - MASPLAY - EQUINOX ANDINA*",
        location: "-",
      },
      {
        hs: "17:45",
        item: "Refresh at Hotel",
        assistants: "NIKE LATAM - MASPLAY - EQUINOX ANDINA*",
        location: "-",
      },
    ],
  },
  {
    event: "DINNER",
    items: [
      {
        hs: "19:00",
        item: "Depart to Dinner",
        assistants: "NIKE LATAM - MASPLAY - EQUINOX ANDINA*",
        location: "-",
      },
      {
        hs: "19:30",
        item: "Dinner at AmoraMar",
        assistants: "NIKE LATAM - RR/RM - RA",
        location: "-",
      },
    ],
  },
];
export default function SchedulePage() {
  const [day, setDay] = useState("Sunday 18/03");
  const [eventsDay, setEventsDay] = useState([]);

  const selectDay = (ev) => {
    setDay(ev.target.value);

    if (ev.target.value === "Sunday 18/03") {
      setEventsDay(sunday);
    }

    if (ev.target.value === "Monday 19/03") {
      setEventsDay(monday);
    }
  };

  useEffect(() => {
    setEventsDay(sunday);
  }, []);

  return (
    <Layout>
      <div className="flex flex-col items-center justify-start w-full h-screen absolute z-50 overflow-hidden">
        <div className="w-full max-w-[450px] h-full flex flex-col mt-[100px] px-4 py-2 items-start justify-start">
          <div className="relative h-11 w-full min-w-[140px]">
            <select
              value={day}
              onChange={(ev) => {
                selectDay(ev);
              }}
              className="peer h-full w-full rounded-md border-2 border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-black outline outline-0 transition-all placeholder-shown:border-2 placeholder-shown:border-blue-gray-900 placeholder-shown:border-t-blue-gray-900 focus:border-2 focus:border-white focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            >
              <option value="Sunday 18/03">Sunday 18/03</option>
              <option value="Monday 19/03">Monday 19/03</option>
              <option value="Tuesday 20/03">Tuesday 20/03</option>
              <option value="Wednesday 21/03">Wednesday 21/03</option>
            </select>
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-200 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t-2 before:border-l-2 before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t-2 after:border-r-2 after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-900 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-white peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-white peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Select day
            </label>
          </div>
          <div className="w-full h-full flex flex-col px-4 py-2 items-start justify-start overflow-y-scroll">
            <div className="mt-4 px-2 pb-[130px] flex flex-col items-start justify-start gap-4">
              {eventsDay.map((event, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start justify-start gap-2"
                >
                  <span className="text-nowrap text-[25px] text-druk tracking-wider uppercase">
                    {event.event}
                  </span>
                  <div className="flex flex-col items-start justify-start gap-2 pl-4">
                    {event.items.map((ev, index) => (
                      <div
                        className="flex flex-col items-start justify-start gap-2 pt-2"
                        key={index}
                      >
                        <span className="text-sm text-center uppercase border-gray-700">
                          {ev.hs}
                        </span>
                        <div className="flex flex-col items-start justify-start pl-4">
                          <div className="flex items-center justify-start gap-2">
                            <span className="text-lg text-center text-druk tracking-wider uppercase text-black">
                              ITEM:
                            </span>
                            <span className="text-xs text-center uppercase text-gray-900">
                              {ev.item}
                            </span>
                          </div>
                          <div className="flex items-center justify-start gap-2">
                            <span className="text-lg text-center text-druk tracking-wider uppercase text-black">
                              Assistants:
                            </span>
                            <span className="text-xs text-center uppercase text-gray-900">
                              {ev.assistants}
                            </span>
                          </div>
                          <div className="flex items-center justify-start gap-2">
                            <span className="text-lg text-center text-druk tracking-wider uppercase text-black">
                              Location:
                            </span>
                            <span className="text-xs text-center uppercase text-gray-900">
                              {ev.location}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
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
