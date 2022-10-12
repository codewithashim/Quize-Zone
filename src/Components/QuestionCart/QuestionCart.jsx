import React from "react";

const QuestionCart = ({ currectAns }) => {
  console.log(currectAns);
  return (
    <section>
      <div className="curretAnsDiv">
        <h1 className="text-3xl font-bold text-center">The Currect Answer Is</h1>
        <h2 className="m-2 text-green-500 text-2xl font-bold"> <br />{currectAns}<br /> </h2>
      </div>
    </section>
  );
};

export default QuestionCart;
