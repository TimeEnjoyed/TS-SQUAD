import React, { useEffect } from "react";
import ProgressBar from "./ProgressBar";

function calculate_wpm(start: Date, end: Date, wordLength: number) {
  const time = Math.abs(start.getTime() - end.getTime()) / 1000;
  const wpm = (wordLength / 5 / time) * 60;
  return wpm;
}

function Input(props: { word: string }) {
  const [text, setText] = React.useState("");
  const { word } = props;
  const [startTimer, setStartTimer] = React.useState<Date | null>(null);
  const [percentage, setPercentage] = React.useState(0);
  useEffect(() => {
    if (!startTimer && !text) {
      setStartTimer(new Date());
    }
    if (text === word && startTimer) {
      const x = calculate_wpm(startTimer, new Date(), word.length);
      alert(`Your WPM is  ${x}`);
    }

    setPercentage(Math.floor((text.length / word.length) * 100));
  }, [startTimer, text, word]);

  return (
    <div className="flex flex-col gap-10">
      <input
        type="text"
        placeholder="Type here"
        onChange={(event) => setText(event.target.value)}
        className="w-[50vw] self-center rounded border border-gray-900 px-4 py-2 text-gray-700"
      />
      <div className="self-center">{`${percentage}%`}</div>
      <div className="w-[90vw] self-center">
        <ProgressBar percentage={percentage} />
      </div>
    </div>
  );
}

export default Input;
