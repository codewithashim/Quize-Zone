import React from "react";
import { Link } from "react-router-dom";
import notFound from "../../Assets/Not-found.jpg";

const NotFound = () => {
  return (
    <section className="flex items-center h-full">
      <div className="container flex flex-col items-center justify-center mx-auto mb-2">
        <div className="max-w-md text-center">
          <img src={notFound} alt="404 Not Found" className="w-full" />
          <h2 className="mb-8 font-extrabold text-5xl">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">
            Sorry, we couldn't find this page.
          </p>
          <p className="mt-4 mb-8">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <Link
            to="/"
            rel="noopener noreferrer"
            className="px-8 py-3 font-semibold rounded shadow-lg btn btn-primary"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
