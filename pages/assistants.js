import Layout from "@/components/Layout";
import Link from "next/link";
import React, { useState } from "react";

const nikelatam = ["Andres Sabarots", "Douglas Bowles", "Juan Pablo Villeda"];
const masplay = [
  "Rodrigo Ribadeneira",
  "Renan Meneses",
  "Julio Santibañez",
  "Bryan Schreier",
  "William Salazar",
  "Gabriela Olivera",
  "Andres Aulestia",
];
const equinoxandina = [
  "Rodrigo Amenabar",
  "Lorena Blanco",
  "Alessandro Alonso",
  "Julio Escoda",
  "Nataly Leiva",
  "Marcos Sundblad",
  "Eugenia Chiaramonte",
  "Ignacio Gonzalez",
];
const equinoxandina2 = [
  "Rodrigo Amenabar",
  "Lorena Blanco",
  "Alessandro Alonso",
];

export default function AssistantsPage() {
  const [assistants, setAssistants] = useState("");
  const [isAssistants, setIsAssistants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const selectAssistants = (ev) => {
    try {
      setAssistants(ev.target.value);
      setIsLoading(true);

      if (ev.target.value === "") {
        setIsAssistants([]);
      }

      if (ev.target.value === "nikelatam") {
        setIsAssistants(nikelatam);
      }

      if (ev.target.value === "masplay") {
        setIsAssistants(masplay);
      }

      if (ev.target.value === "equinoxandina") {
        setIsAssistants(equinoxandina);
      }

      if (ev.target.value === "equinoxandina*") {
        setIsAssistants(equinoxandina2);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, "1000");
    }
  };

  return (
    <Layout>
      <div className="flex flex-col items-center justify-start w-full h-screen absolute z-50 overflow-x-hidden">
        <div className="w-full max-w-[450px] h-full flex flex-col pt-[100px] px-4 pb-4 items-start justify-start relative">
          <div className="absolute z-50 top-5 left-5 bg-black py-2 pr-4 pl-2 rounded-sm flex items-center gap-2">
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
          <div className="w-full flex flex-col items-start mb-4 relative">
            <div className="absolute top-4 left-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                />
              </svg>
            </div>
            <div className="relative h-12 w-full min-w-[140px] mb-4">
              <select
                value={assistants}
                onChange={(ev) => {
                  selectAssistants(ev);
                }}
                className="peer h-full w-full rounded-md border-2 border-blue-gray-200 border-t-transparent bg-transparent px-7 py-3 font-sans text-sm font-normal text-black outline outline-0 transition-all placeholder-shown:border-2 placeholder-shown:border-blue-gray-900 placeholder-shown:border-t-blue-gray-900 focus:border-2 focus:border-white focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              >
                <option value="">Select Assistants</option>

                <option value="nikelatam">Nike Latam</option>
                <option value="masplay">Masplay</option>
                <option value="equinoxandina">Equinox Andina</option>
                <option value="equinoxandina*">Equinox Andina*</option>
              </select>
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-200 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t-2 before:border-l-2 before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t-2 after:border-r-2 after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-900 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-white peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-white peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Select Assistants
              </label>
            </div>
          </div>
          <div className="w-full h-full min-h-[300px] flex flex-col px-4 pb-2 items-start justify-between overflow-y-scroll">
            {isLoading ? (
              <div className="w-full flex items-center justify-center pt-4">
                <div className="relative w-[25px] h-[45px] flex items-center justify-center">
                  <div className="absolute">
                    <svg className="spinner" viewBox="0 0 50 50">
                      <circle
                        className="path"
                        cx="25"
                        cy="25"
                        r="20"
                        fill="none"
                        strokeWidth="5"
                      ></circle>
                    </svg>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full"
                    viewBox="135.5 361.38 1000 356.39"
                  >
                    <path
                      fill="#ffffff"
                      d="M245.8075 717.62406c-29.79588-1.1837-54.1734-9.3368-73.23459-24.4796-3.63775-2.8928-12.30611-11.5663-15.21427-15.2245-7.72958-9.7193-12.98467-19.1785-16.48977-29.6734-10.7857-32.3061-5.23469-74.6989 15.87753-121.2243 18.0765-39.8316 45.96932-79.3366 94.63252-134.0508 7.16836-8.0511 28.51526-31.5969 28.65302-31.5969.051 0-1.11225 2.0153-2.57652 4.4694-12.65304 21.1938-23.47957 46.158-29.37751 67.7703-9.47448 34.6785-8.33163 64.4387 3.34693 87.5151 8.05611 15.898 21.86731 29.6684 37.3979 37.2806 27.18874 13.3214 66.9948 14.4235 115.60699 3.2245 3.34694-.7755 169.19363-44.801 368.55048-97.8366 199.35686-53.0408 362.49439-96.4029 362.51989-96.3672.056.046-463.16259 198.2599-703.62654 301.0914-38.08158 16.2806-48.26521 20.3928-66.16827 26.6785-45.76525 16.0714-86.76008 23.7398-119.89779 22.4235z"
                    />
                  </svg>
                </div>
              </div>
            ) : (
              <div className="w-full mt-4 pb-4 flex flex-col items-start justify-start">
                {isAssistants.map((assistant, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-start justify-start"
                  >
                    <div
                      data-aos-delay={`${50 * index}`}
                      data-aos="fade-right"
                      className="flex fle-col items-center text-white"
                    >
                      <div className="pr-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      {assistant.split("").map((letter, index) => (
                        <span
                          key={index}
                          data-aos-delay={`${50 * index}`}
                          data-aos="fade-right"
                          className="text-[14px] text-white text-start font-bold mr-0.5"
                        >
                          {letter === " " ? "\xA0" : letter}
                        </span>
                      ))}
                    </div>
                    {/*                     <div className="flex flex-col items-start justify-start gap-2 pl-4">
                      {event.items.map((ev, index) => (
                        <div
                          className="flex flex-col items-start justify-start gap-2 pt-2"
                          key={index}
                        >
                          <span className="text-sm text-center uppercase">
                            {ev.hs}
                          </span>
                          <div className="flex flex-col items-start justify-start pl-4 gap-1">
                            <div className="flex items-start justify-start gap-2">
                              <span className="text-lg text-white text-center text-druk tracking-wider uppercase text-black">
                                ITEM:
                              </span>
                              <span className="text-xs text-white text-start pt-1 uppercase text-gray-900">
                                {ev.item}
                              </span>
                            </div>
                            <div className="flex items-start justify-start gap-2">
                              <span className="text-lg text-white text-center text-druk tracking-wider uppercase text-black">
                                Assistants:
                              </span>
                              <span className="text-xs text-white text-start pt-1 uppercase text-gray-900">
                                {ev.assistants}
                              </span>
                            </div>
                            <div className="flex items-start justify-start gap-2">
                              <span className="text-lg text-white text-center text-druk tracking-wider uppercase text-black">
                                Location:
                              </span>
                              <span className="text-xs text-white text-start pt-1 uppercase text-gray-900">
                                {ev.location}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div> */}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
