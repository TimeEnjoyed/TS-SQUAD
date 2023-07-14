import React, { useEffect, useRef } from "react";
import ProgressBar from "./ProgressBar";
import Word from "./Word";

//word - word to be typed
//text - word user inputting

function calculate_wpm(start: Date, end: Date, wordLength: number) {
  const time = Math.abs(start.getTime() - end.getTime()) / 1000;
  const wpm = (wordLength / 5 / time) * 60;
  return Math.floor(wpm);
}

function calculatePercentageDone(text: string, word: string) {
  if (!text) {
    return 0;
  }
  const textSplit = text.split(" ");
  const wordSplit = word.split(" ");
  let counter = 0;
  let i = 0;
  for (const w of textSplit) {
    if (w === wordSplit[i]) {
      counter++;
    } else {
      break;
    }
    i++;
  }
  return Math.floor((counter / wordSplit.length) * 100);
}

function Input(props: { word: string }) {
  const [text, setText] = React.useState("");
  const { word } = props;
  const [startTimer, setStartTimer] = React.useState<Date | null>(null);
  const [percentage, setPercentage] = React.useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const [wpm, setWpm] = React.useState(-1);

  useEffect(() => {
    if (inputRef?.current) {
      inputRef.current.focus();
    }
  }, []);

  const resetState = () => {
    setText("");
    setStartTimer(null);
    setWpm(-1);
    if (inputRef?.current) {
      inputRef.current.focus();
    }
  };

  const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    //Incase they try to copy and paste xD
    event.preventDefault();
    alert("Nice try, I am going to waste your time for trying to be cheeky");
    alert("Why did the bullet end up losing his job?");
    alert("He got fired");
    alert("Why doesn’t Dracula have any friends?");
    alert("Well, honestly, he’s a real pain in the neck.");
  };

  useEffect(() => {
    if (!startTimer && text.length > 0) {
      setStartTimer(new Date());
    }
    if (text === word && startTimer) {
      setWpm(calculate_wpm(startTimer, new Date(), word.length));
    }

    setPercentage(calculatePercentageDone(text, word));
  }, [startTimer, text, word]);

  return (
    <div className="flex flex-col gap-10 break-all text-xl">
      {wpm !== -1 ? (
        <div className="align-center flex flex-col gap-3 self-center">
          <div className=" font-bold">{`Congratulations your WPM is ${wpm}`}</div>
          <button
            onClick={resetState}
            className="rounded-pill w-[170px] self-center justify-self-end bg-blue-500 px-4 py-2 font-bold text-white"
          >
            Retry
          </button>
        </div>
      ) : (
        <>
          <Word word={word} text={text} />
          <input
            type="text"
            onPaste={handlePaste}
            placeholder="Type here"
            onChange={(event) => setText(event.target.value)}
            className="w-[50vw] self-center rounded border border-gray-900 px-4 py-2 text-gray-700"
            ref={inputRef}
          />

          {startTimer && (
            <>
              <div className="self-center">{`${percentage}%`}</div>
              <div className="w-[90vw] self-center">
                <ProgressBar percentage={percentage} />
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Input;
