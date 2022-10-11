import React from "react";
import { useLoaderData } from "react-router-dom";
import Questions from "../Questions/Questions";

const Quize = () => {
  const quizes = useLoaderData();
  const allQuize = quizes.data;
  console.log(allQuize);
  const { name, total, logo, questions } = allQuize;

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
            {
                questions.map((question, idx) => {
                    return(
                        <Questions key={idx} question={question}></Questions>
                    )
                })
            }
          </div>
        </div>
        <div className="questionCartCotainer">
          <h1>hello crt</h1>
        </div>
      </div>
    </section>
  );
};

export default Quize;
