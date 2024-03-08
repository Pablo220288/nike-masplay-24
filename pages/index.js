import SignIn from "@/pages/auth/signin";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from 'next/router'

export default function Home() {
  
  const router = useRouter()
  
  const { data: session } = useSession();

  if (!session) {
    return <SignIn />;
  }

  async function logout() {
    await router.push("/");
    await signOut();
  }
  
  return (
    <div className=" w-screen h-screen flex flex-col justify-center items-center gap-2">
      <div>Hello, {session.user.name}</div>
      <button
        onClick={logout}
        className="flex gap-3 p-2 rounded-lg text-blue-gray-400"
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
  );
}
