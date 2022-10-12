import React from "react";
import { Link } from "react-router-dom";
import HeroBanner from "../../Assets/hero-banner.svg";

const Hero = () => {
  return (
    <section className="container">
      <div className="hero min-h-screen md:max-w-fulll px-10">
        <div className="hero-content grid md:grid-cols-2 sm:grid-cols-1 gap-2">
          <div>
            <h1 className="text-3xl font-bold">
              Hey Wellcome To CaryQuize Zone!
            </h1>
            <p className="py-6">
              Hey Dear Learner Join With Us And Learn More And More About The
              Tech .
            </p>
            <Link className="btn btn-primary" to="/topic">
              Get Started
            </Link>
          </div>
          <div>
            <img src={HeroBanner} alt="hero banner" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
