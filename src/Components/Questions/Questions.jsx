import React from "react";
import { EyeIcon } from "@heroicons/react/24/solid";
import { Link } from "react-daisyui";
import QuestionOpctions from "../QuestionOpctions/QuestionOpctions";

const Questions = ({ question, hendelCuurentAnswer }) => {
  // const { question: questionText, options, correctAnswer } = question;
  const { question: questionText, options } = question;

  return (
    <section className="questionSingelCart border rounded p-5 shadow-lg bg-base-300 m-2">
      <div className="curretAnswer flex justify-end">
        <Link
          onClick={() => hendelCuurentAnswer(question.correctAnswer)}
          className="cursor-pointer"
        >
          <EyeIcon className="h-6 w-6 text-green-400" />
        </Link>
      </div>
      <div className="mainQuestionText mb-2">
        <p className="text[16px] font-medium text-blue-500">{questionText}</p>
      </div>
      <div className="questionOpctions">
        {options.map((opction, idx) => {
          return (
            <QuestionOpctions key={idx} opction={opction}></QuestionOpctions>
          );
        })}
      </div>
    </section>
  );
};

export default Questions;
