import React from "react";
import { useLoaderData } from "react-router-dom";
import TopicCard from "../TopicCard/TopicCard";
import './Topic.css'

const Topic = () => {
  const quizeTopic = useLoaderData();
  const allTopic = quizeTopic.data;
  console.log(allTopic);
  return (
    <section className="container md:p-10 lg:p-10 sm:p-2">
      <div className="topiceContianer grid gap-2 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 mx-auto">
        {allTopic.map((topic) => {
          return <TopicCard topic={topic} key={topic.id}></TopicCard>;
        })}
      </div>
    </section>
  );
};

export default Topic;
