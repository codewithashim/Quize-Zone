import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const QuestionOpctions = ({ opction, correctAnswer }) => {
  const [isCurrect, setIsCurrect] = React.useState(false);
  const [isWrong, setIsWrong] = React.useState(false);

  const selectCurrectAnsHendler = () => {
    if (opction === correctAnswer) {
      isCurrect ? setIsCurrect(false) : setIsCurrect(true);
      toast.success("This Is Currect Answer !", {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      isWrong ? setIsWrong(false) : setIsWrong(true);
      toast.warn("This Is Wrang Answer!", {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <section className="questionOpctionSections bg-blue-300 p-2 rounded m-2">
      <div className="form-control">
        <Link onClick={() => selectCurrectAnsHendler()}>
          <label className="label cursor-pointer">
            <span className="label-text">{opction}</span>
            <input
              type="radio"
              name="radio-6"
              className="radio checked:bg-blue-500"
              checked
            />
          </label>
        </Link>
      </div>
      <ToastContainer />
    </section>
  );
};

export default QuestionOpctions;
