import React from "react";

const QuestionCart = ({ currectAns }) => {
  console.log(currectAns);
  return (
    <section>
      <div className="curretAnsDiv mb-3">
        <h1 className="text-3xl font-bold text-center">
          The Currect <span className="text-green-500">Answer</span> Is
        </h1>
        <h2 className="m-2 text-green-500 text-2xl font-bold">
          {" "}
          <br />
          {currectAns}
          <br />{" "}
        </h2>
      </div>
      <div className="totalCurrectAns">

      </div>
      <div className="totalWorngAns"></div>
    </section>
  );
};

export default QuestionCart;
