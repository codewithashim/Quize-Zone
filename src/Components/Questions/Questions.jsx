import React from "react";

const Questions = ({ question }) => {
    const { question: questionText, options, correctAnswer, id } = question;
  return (
    <section className="questionSingelCart border rounded shadow-lg bg-blue-400 m-2">
      <div className="curretAnswer">
            
      </div>

    </section>
  );
};

export default Questions;
