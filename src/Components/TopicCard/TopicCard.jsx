import React from "react";
import {Link} from 'react-router-dom'

const TopicCard = ({ topic }) => {
  const { name, logo, total, id } = topic;
  return (
    <section className="m-2">
      <div className="card md:w-96 sm:w-60 bg-base-300 shadow-xl">
        <figure className="p-10">
          <img src={logo} alt="All Topic" />
        </figure>
        <div className="card-body">
          <h1 className="card-title text-3xl font-bold">{name}</h1>
          <p>
            <div className="badge badge-secondary p-3 text-[1rem] font-bold">Total Questions {total}</div>
          </p>
          <div className="card-actions justify-end">   
            <Link to={`/quize/${id}`} className="btn btn-primary"> Start Now</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopicCard;
