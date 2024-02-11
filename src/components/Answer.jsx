import { useRef } from "react";

function Answer({userAsnwer, answers, asnwerState, onAnswer}) {
  const shuffeledAnswer = useRef();

  if (!shuffeledAnswer.current) {
    shuffeledAnswer.current = [...answers];
    shuffeledAnswer.current.sort(() => Math.random() - 0.5);
  }

  return (
    <>
      <ul className="text-center flex flex-col gap-y-5 w-full">
        {shuffeledAnswer.current.map((answer, i) => {
          let cssStyle = "";
          const isSelected = userAsnwer[userAsnwer.length - 1] === answer;

          if (asnwerState === "answered" && isSelected) {
            cssStyle = "bg-amber-500";
          }

          if (asnwerState === "wrong" && isSelected) {
            cssStyle = "bg-red-500";
          } else if (asnwerState === "correct" && isSelected) {
            cssStyle = "bg-lime-500";
          } else if (asnwerState === "") {
            cssStyle = "bg-sky-700";
          }
          return (
            <li className={`w-full bg-sky-700 rounded-full text-xl hover:bg-indigo-600 cursor-pointer`} key={i}>
              <button onClick={() => onAnswer(answer)} className={`w-full py-2 rounded-full ${cssStyle}`}>
                {answer}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Answer;
