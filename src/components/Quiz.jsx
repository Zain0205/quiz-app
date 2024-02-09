import { useState, useCallback } from "react";
import QUESTION from "../question.js";
import Timer from "./TImer.jsx";

function Quiz() {
  const [userAsnwer, setUserAnswer] = useState([]);
  const questionIndex = userAsnwer.length;

  const handleUserAnswer = useCallback((ans) => {
    setUserAnswer((prev) => {
      return [...prev, ans];
    });
  }, []);

  const handleSkipAnswer = useCallback(() => handleUserAnswer(null), [handleUserAnswer]);

  if (userAsnwer.length === QUESTION.length) {
    return (
      <div className="bg-sky-900 py-10 flex flex-col gap-y-3 items-center justify-center">
        <p className="text-2xl text-white font-semibold">Quiz Selesai</p>
        <button className="bg-sky-600 px-8 py-2 rounded-xl text-slate-50 font-semibold hover:bg-indigo-600">
          Mulai Lagi?
        </button>
      </div>
    );
  }

  const questionAsnwer = [...QUESTION[questionIndex].answers];
  const unSortedAnswer = questionAsnwer.sort(() => Math.random() - 0.5);

  return (
    <div className="bg-sky-900 text-white w-full rounded-md px-4 flex flex-col gap-y-5 items-center py-5">
      <Timer key={questionIndex} timeout={10000} onTimeOut={() => handleSkipAnswer(null)} />
      <h1 className="text-2xl font-semibold">{QUESTION[questionIndex].question}</h1>
      <ul className="text-center flex flex-col gap-y-5 w-full">
        {unSortedAnswer.map((answer, i) => (
          <li className="w-full bg-sky-700 rounded-full text-xl hover:bg-indigo-600 cursor-pointer" key={i}>
            <button onClick={() => handleUserAnswer(answer)} className="w-full py-2">
              {answer}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Quiz;
