import React from "react";

const QuestionOpctions = ({ opction }) => {
  return (
    <section className="questionOpctionSections bg-blue-300 p-2 rounded m-2">
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">{opction}</span>
          <input
            type="radio"
            name="radio-6"
            className="radio checked:bg-blue-500"
            checked
          />
        </label>
      </div>
    </section>
  );
};

export default QuestionOpctions;
