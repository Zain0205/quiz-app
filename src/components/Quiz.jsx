import { useState, useCallback, useRef } from "react";
import QUESTION from "../question.js";
import Timer from "./TImer.jsx";
import Answer from "./Answer.jsx";

function Quiz() {
    const [asnwerState, setAnswerState] = useState("");
  const [userAsnwer, setUserAnswer] = useState([]);
  const questionIndex = asnwerState === "" ? userAsnwer.length : userAsnwer.length - 1;

  const handleUserAnswer = useCallback(
    (ans) => {
      setAnswerState("answered");
      setUserAnswer((prev) => {
        return [...prev, ans];
      });

      setTimeout(() => {
        if (QUESTION[questionIndex].answers[0] === ans) {
          setAnswerState("correct");
        } else {
          setAnswerState("wrong");
        }

        setTimeout(() => {
          setAnswerState("");
        }, 2000);
      }, 1000);
    },
    [questionIndex]
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
      <Timer key={questionIndex} timeout={10000} onTimeOut={() => handleSkipAnswer(null)} />
      <h1 className="text-2xl font-semibold">{QUESTION[questionIndex].question}</h1>
      <Answer answers={QUESTION[questionIndex].answers} userAsnwer={userAsnwer} asnwerState={asnwerState} onAnswer={handleUserAnswer} />
    </div>
  );
}

export default Quiz;
