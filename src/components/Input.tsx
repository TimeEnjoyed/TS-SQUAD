import React, { useEffect } from "react";
import ProgressBar from "./ProgressBar";

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
  const [wpm, setWpm] = React.useState(-1);
  const resetState = () => {
    setText("");
    setStartTimer(null);
  };

  const handlePaste = (event: React.ChangeEvent<HTMLInputElement>) => {
    //Incase they try to copy and paste xD
    event.preventDefault();
    alert("Nice try, I am going to waste your time for trying to be cheeky");
    alert("Why did the bullet end up losing his job?");
    alert("He got fired");
    alert("Why doesn’t Dracula have any friends?");
    alert("Well, honestly, he’s a real pain in the neck.");
  };

  useEffect(() => {
    if (!startTimer && !text) {
      setStartTimer(new Date());
    }
    if (text === word && startTimer) {
      setWpm(calculate_wpm(startTimer, new Date(), word.length));
      resetState();
    }

    setPercentage(calculatePercentageDone(text, word));
  }, [startTimer, text, word]);

  return (
    <div className="flex flex-col gap-10">
      {wpm !== -1 ? (
        <div className="self-center font-bold">{`Congratulations your WPM is ${wpm}`}</div>
      ) : (
        <input
          type="text"
          onPaste={handlePaste}
          placeholder="Type here"
          onChange={(event) => setText(event.target.value)}
          className="w-[50vw] self-center rounded border border-gray-900 px-4 py-2 text-gray-700"
        />
      )}
      <div className="self-center">{`${percentage}%`}</div>
      <div className="w-[90vw] self-center">
        <ProgressBar percentage={percentage} />
      </div>
    </div>
  );
}

export default Input;
