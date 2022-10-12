import React from "react";
import { Link } from "react-router-dom";

const TopicCard = ({ topic }) => {
  const { name, logo, total, id } = topic;
  return (
    <section className="m-4">
      {/* ---------------- */}
      <div className="card sm:flex-col lg:card-side w-3/4  mx-auto bg-base-300 shadow-xl p-5">
        <figure>
          <img className="w-40" src={logo} alt="All Topice" />
        </figure>
        <div className="card-body sm:flex-col">
          <h2 className="card-title mb-1">{name}</h2>
          <p>
            <div className="badge badge-secondary p-3 text-[0.7rem] font-bold">
              Total Questions {total}
            </div>
          </p>
          <div className="card-actions mt-3">
            <Link to={`/quize/${id}`} className="btn btn-primary">
              {" "}
              Start Now
            </Link>
          </div>
        </div>
        <div className="cardRating flex flex-col sm:flex-col">
          <div>
            <h1 className="text-2xl mb-4 text-orange-400 font-bold">
              Total Rating{""}
            </h1>
          </div>
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <div>
              <span className="text-[1.2rem] ml-2 text-orange-500 font-bold">
                5
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopicCard;
