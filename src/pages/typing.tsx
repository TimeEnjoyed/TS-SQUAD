import React from "react";
import dynamic from "next/dynamic";

const Game = dynamic(() => import("~/components/Game"), { ssr: false });

function Typing() {
  return (
    <div className="flex h-[99vh] flex-col justify-center gap-4">
      <Game />
    </div>
  );
}

export default Typing;
