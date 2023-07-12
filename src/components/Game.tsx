import getWord from "~/utilities";
import React from "react";
import Input from "~/components/Input";
import Word from "~/components/Word";
function Game() {
  const word = getWord();

  return (
    <>
      <Word word={word} />
      <Input word={word} />
    </>
  );
}

export default Game;
