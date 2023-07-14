import React from "react";

function ProgressBar(props: { percentage: number }) {
  const { percentage } = props;
  return (
    <div className="mb-4 h-4 w-full rounded-full bg-gray-200 dark:bg-gray-700">
      <div
        className="h-4 rounded-full bg-purple-600"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
}

export default ProgressBar;
