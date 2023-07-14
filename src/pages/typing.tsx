import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
const Game = dynamic(() => import("~/components/Game"), { ssr: false });

function Typing() {
  const { data: session } = useSession();
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { push } = useRouter();
  useEffect(() => {
    if (!session) {
      push("/");
    }
  }, [push, session]);

  return (
    <>
      <div className="flex items-center justify-between bg-purple-800 p-2">
        <div className="flex items-center gap-7">
          <Image
            src={session?.user?.image}
            width={50}
            height={50}
            alt="Picture of current user"
          />
          <div className=" text-white">Welcome {session?.user?.name}</div>
        </div>
        <button
          onClick={() => signOut()}
          className="rounded-pill w-[170px] justify-self-end bg-blue-500 px-4 py-2 font-bold text-white"
        >
          Sign out
        </button>
      </div>
      <div className="flex h-[99vh] flex-col justify-center gap-4">
        <Game />
      </div>
    </>
  );
}

export default Typing;
