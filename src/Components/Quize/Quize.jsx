import React from "react";
import { useLoaderData } from "react-router-dom";
import QuestionCart from "../QuestionCart/QuestionCart";
import Questions from "../Questions/Questions";
import { ToastContainer, toast } from "react-toastify";

const Quize = () => {
  const [currectAns, setCurrectAns] = React.useState([]);
  const quizes = useLoaderData();
  const allQuize = quizes.data;
  console.log(allQuize);
  const { name, total, logo, questions } = allQuize;

  const hendelCuurentAnswer = (curretAnswer) => {
    console.log(curretAnswer);
    const exist = currectAns.find((ans) => ans === curretAnswer);
    if (exist) {
      toast.warn("Already Given This Answer Pless See This In Cart!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      const newAns = [...currectAns, " ", "💢", " ", curretAnswer];
      setCurrectAns(newAns);
      // setCurrectAns([...currectAns, curretAnswer]);
      toast.info("See The Currect Answer!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <section className="quizeSection">
      <div className="quizeTopicDetails shadow-lg mt-2 p-2 bg-base-300 flex justify-center items-center w-80 rounded mx-auto gap-8">
        <div className="quizeTopicDetails__logo">
          <img className="w-32" src={logo} alt="TopicLogo" />
        </div>
        <div className="quizeTopicDetails__info w-full">
          <h1 className="text-3xl font-bold mb-2">{name}</h1>
          <p className="text-2xl font-bold"></p>
          <div className="badge badge-secondary p-3 text-[1rem] font-bold">
            Total Questions <span className="ml-1">{total}</span>
          </div>
        </div>
      </div>

      <div class="mainQuestionContainer grid grid-flow-row-dense  m-2 p-2 md:grid-cols-3 gap-3 xl:grid-cols-3 sm:grid-cols-1 sm:grid-rows-2 xl:grid-rows-2 md:grid-rows-2 px-5">
        <div class="questionContainer col-span-2">
          <div className="mainQuestion flex flex-col">
            {questions.map((question, idx) => {
              return (
                <Questions
                  hendelCuurentAnswer={hendelCuurentAnswer}
                  key={idx}
                  question={question}
                ></Questions>
              );
            })}
          </div>
        </div>
        <div className="questionCartCotainer shadow p-4">
          <QuestionCart currectAns={currectAns}></QuestionCart>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Quize;
