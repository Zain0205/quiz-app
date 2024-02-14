import { useState, useCallback } from "react";
import QUESTION from "../question.js";
import Question from "./Question.jsx";

function Quiz() {
  const [userAsnwer, setUserAnswer] = useState([]);
  const questionIndex = userAsnwer.length;

  const handleUserAnswer = useCallback(
    (ans) => {
      setUserAnswer((prev) => {
        return [...prev, ans];
      });
    },

    []
  );

  const handleSkipAnswer = useCallback(() => handleUserAnswer(null), [handleUserAnswer]);

  if (userAsnwer.length === QUESTION.length) {
    return (
      <div className="bg-sky-900 py-10 flex flex-col gap-y-3 items-center justify-center">
        <p className="text-2xl text-white font-semibold">Quiz Selesai</p>
        <button className="bg-sky-600 px-8 py-2 rounded-xl text-slate-50 font-semibold hover:bg-indigo-600">Mulai Lagi?</button>
      </div>
    );
  }

  return (
    <div className="bg-sky-900 text-white w-full rounded-md px-4 flex flex-col gap-y-5 items-center py-5">
      <Question key={questionIndex} index={questionIndex} skipQuestion={handleSkipAnswer} selectQuestion={handleUserAnswer} />
    </div>
  );
}

export default Quiz;
