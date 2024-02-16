import QUESTION from "../question";

function Summary({ answerArr }) {
  const skippedAnswer = answerArr.filter(answer => answer === null)
  const correctAnswer = answerArr.filter((answer, index) => answer === QUESTION[index].answers[0])

  const correctAnswerSummary = Math.round(correctAnswer.length / answerArr.length * 100)
  const skippedAnswerSummary = Math.round(skippedAnswer.length / answerArr.length * 100)
  const wrongAnswerSummary = 100 - skippedAnswerSummary - correctAnswerSummary


  return (
    <>
      <div className="bg-sky-900 py-10 flex flex-col gap-y-3 items-center justify-center md:max-w-[60%] lg:max-w-[40%] mx-auto w-full">
        <p className="text-2xl text-white font-semibold">Quiz Selesai</p>
        <div className="flex justify-between items-center gap-x-10">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-2xl font-semibold text-white">{correctAnswerSummary}%</h2>
            <p className="font-semibold text-xl text-white">Correct</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-2xl font-semibold text-white">{wrongAnswerSummary}%</h2>
            <p className="font-semibold text-xl text-white">Wrong</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-2xl font-semibold text-white">{skippedAnswerSummary}%</h2>
            <p className="font-semibold text-xl text-white">Skipped</p>
          </div>
        </div>
        <ul className="mt-8">
          {answerArr.map((answer, index) => {

            let answerColor = '';

            if (answer === null){
              answerColor = "text-white"
            } else if (answer === QUESTION[index].answers[0]){
              answerColor = "text-lime-500"
            } else {
              answerColor = 'text-red-500'
            }

            return (
              <li className="text-md text-white mt-5 font-semibold">
                <h1 className="text-center">{index + 1}. {QUESTION[index].question}</h1>
                <p className={`text-center ${answerColor}`}>{answer ?? "skipped"}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Summary;
