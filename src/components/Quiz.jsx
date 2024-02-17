import { useState, useCallback } from "react";
import QUESTION from "../question.js";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

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
      <Summary answerArr={userAsnwer} />
    );
  }

  return (
    <div className="bg-sky-900 md:max-w-[60%] lg:max-w-[40%] mx-auto text-white w-full rounded-md px-4 flex flex-col gap-y-5 items-center py-5">
      <Question key={questionIndex} index={questionIndex} skipQuestion={handleSkipAnswer} selectQuestion={handleUserAnswer} />
    </div>
  );
}

export default Quiz;
