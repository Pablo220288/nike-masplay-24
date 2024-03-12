import Layout from "@/components/Layout";
import SignIn, { generalDelay } from "@/pages/auth/signin";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const { data: session } = useSession();

  if (!session) {
    return <SignIn />;
  }

  async function logout() {
    await router.push("/");
    await signOut();
  }

  const link1 = "agenda";
  const link2 = "perú retail book";
  const link3 = "chile retail book";
  const link4 = "assistants";

  return (
    <Layout>
      <div className="w-screen h-screen flex flex-col justify-center items-center gap-2 absolute z-40 overflow-x-hidden">
        <div className="absolute z-40 top-6 left-6 font-light text-[14px] flex flex-col items-start">
          <div className="flex items-end">
            <span
              className="text-druk tracking-wide text-[20px] uppercase"
              data-aos="fade-right"
              data-aos-delay={`${generalDelay}`}
            >
              Hi
            </span>
            <span
              data-aos="fade-right"
              data-aos-delay={`${generalDelay + 150}`}
              className="text-druk ml-2 tracking-wide text-[20px] uppercase"
            >
              {session.user.name}
            </span>
          </div>

          {/* <Link
            href={"/schedule"}
            className="uppercase font-bold text-white pt-2 flex items-center gap-1"
          >
            <div className="flex items-center">
              {link1.split("").map((letter, index) => (
                <span
                  key={index}
                  data-aos-delay={`${50 * index + generalDelay}`}
                  data-aos="fade-right"
                  className="text-xs underline text-white text-start font-bold mr-0.5"
                >
                  {letter}
                </span>
              ))}
            </div>
            <span
              data-aos="fade-right"
              data-aos-delay={`${50 + generalDelay}`}
              className="text-sm underline underline-offset-4 font-light text-white text-start font-bold pb-1"
            >
              agenda
            </span>
          </Link> */}
        </div>
        <div className="flex flex-col">
          <Link
            href={"/schedule"}
            className="text-druk uppercase italic text-white"
          >
            <div className="flex items-center">
              {link1.split("").map((letter, index) => (
                <span
                  key={index}
                  data-aos-delay={`${50 * index + generalDelay}`}
                  data-aos="fade-right"
                  className="text-[30px] text-white text-start font-bold mr-0.5"
                >
                  {letter === " " ? "\xA0" : letter}
                </span>
              ))}
            </div>
          </Link>
          <Link
            href={"/assistants"}
            className="text-druk uppercase italic text-white"
          >
            <div className="flex items-center">
              {link4.split("").map((letter, index) => (
                <span
                  key={index}
                  data-aos-delay={`${50 * index + generalDelay}`}
                  data-aos="fade-right"
                  className="text-[30px] text-white text-start font-bold mr-0.5"
                >
                  {letter === " " ? "\xA0" : letter}
                </span>
              ))}
            </div>
          </Link>
          <Link
            href={"/peru"}
            className="text-druk uppercase italic text-white"
          >
            <div className="flex items-center">
              {link2.split("").map((letter, index) => (
                <span
                  key={index}
                  data-aos-delay={`${50 * index + generalDelay}`}
                  data-aos="fade-right"
                  className="text-[30px] text-white text-start font-bold mr-0.5"
                >
                  {letter === " " ? "\xA0" : letter}
                </span>
              ))}
            </div>
          </Link>
          <Link
            href={"/chile"}
            className="text-druk uppercase italic text-white"
          >
            <div className="flex items-center">
              {link3.split("").map((letter, index) => (
                <span
                  key={index}
                  data-aos-delay={`${50 * index + generalDelay}`}
                  data-aos="fade-right"
                  className="text-[30px] text-white text-start font-bold mr-0.5"
                >
                  {letter === " " ? "\xA0" : letter}
                </span>
              ))}
            </div>
          </Link>
        </div>
        <button
          onClick={logout}
          className="absolute z-40 top-[55px] left-3 flex items-center gap-1 p-2 text-[15px] uppercase"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
            />
          </svg>
          Logout
        </button>
      </div>
    </Layout>
  );
}
