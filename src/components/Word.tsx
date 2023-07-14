import React, { useMemo } from "react";

function Word(props: { word: string; text: string }) {
  const { word, text } = props;

  const formattedWord = useMemo(() => {
    let flag = true;
    const textSplit = text.split(" ");
    return word.split(" ").map((w, i) => {
      if (w === textSplit[i] && flag) {
        return (
          <span
            className="mx-[2px] bg-green-500 p-1 text-white"
            key={`word-${w}`}
          >
            {w}
          </span>
        );
      } else {
        flag = false;
        return (
          <span className="mx-[2px] p-1" key={`word-${w}`}>
            {w}
          </span>
        );
      }
    });
  }, [text, word]);

  return <div className=" w-[70vw] self-center p-5">{formattedWord}</div>;
}

export default Word;
