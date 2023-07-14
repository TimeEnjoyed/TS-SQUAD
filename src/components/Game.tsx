import getWord from "~/utilities";
import React from "react";
import Input from "~/components/Input";

function Game() {
  const word = getWord();

  return <Input word={word} />;
}

export default Game;
