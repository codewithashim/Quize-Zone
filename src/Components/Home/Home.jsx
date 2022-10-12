import React from "react";
import { useLoaderData } from "react-router-dom";
import Hero from "../Hero/Hero";
// import Topic from '../Topic/Topic';
import TopicCard from "../TopicCard/TopicCard";

const Home = () => {
  const quizeTopic = useLoaderData();
  const allTopic = quizeTopic.data;

  return (
    <section className="container">
      <Hero></Hero>

      <section className="container md:p-10 lg:p-10 sm:p-2">
        <div className="topiceContianer mx-auto">
          {allTopic.map((topic) => {
            return <TopicCard topic={topic} key={topic.id}></TopicCard>;
          })}
        </div>
      </section>
    </section>
  );
};

export default Home;
