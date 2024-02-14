import { useState } from "react";
import QUESTION from "../question";

import Timer from "./Timer";
import Answer from "./Answer";

function Question({ index, selectQuestion, skipQuestion }) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  let timer = 10000;

  if (answer.selectedAnswer) {
    timer = 1000;
  }

  if(answer.isCorrect !== null){
    timer = 2000
  }

  const handleSelectAnswer = (ans) => {
    setAnswer({
      selectedAnswer: ans,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: ans,
        isCorrect: QUESTION[index].answers[0] === ans,
      });

      setTimeout(() => {
        selectQuestion(ans);
      }, 2000);
    }, 1000);
  };

  let asnwerState = "";

  if (answer.selectedAnswer && answer.isCorrect != null) {
    asnwerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    asnwerState = "answered";
  }
  return (
    <>
      <Timer key={timer} timeout={timer} onTimeOut={answer.selectedAnswer === '' ? skipQuestion : null} />
      <h1 className="text-2xl font-semibold">{QUESTION[index].question}</h1>
      <Answer answers={QUESTION[index].answers} userAsnwer={answer.selectedAnswer} asnwerState={asnwerState} onAnswer={handleSelectAnswer} />
    </>
  );
}

export default Question;
