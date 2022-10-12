import React from "react";
import { useLoaderData } from "react-router-dom";
import TopicCard from "../TopicCard/TopicCard";
import './Topic.css'

const Topic = () => {
  const quizeTopic = useLoaderData();
  const allTopic = quizeTopic.data;
  return (
    <section className="container md:p-10 lg:p-10 sm:p-2">
      <div className="topiceContianer mx-auto">
        {allTopic.map((topic) => {
          return <TopicCard topic={topic} key={topic.id}></TopicCard>;
        })}
      </div>
    </section>
  );
};

export default Topic;
