import React from "react";

function Word(props: { word: string }) {
  const { word } = props;
  return <div className=" w-[70vw] self-center p-5">{word}</div>;
}

export default Word;
