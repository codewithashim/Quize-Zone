import React from "react";

const Blogs = () => {
  return (
    <section className="p-5">
      <h2 className="text-2xl p-3 font-bold text-orange-500">
        Few Question And Answer
      </h2>

      <article className=" mb-4">
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            <h3>What Is Context API In React? And How it Works?</h3>
          </div>
          <div className="collapse-content">
            <p>
              Context API is a component-based front-end framework that passes
              data from one component to another. It appears like passing data
              from parent to child components. Certain props like UI themes,
              language settings, local preferences, and others need different
              components with the application.
            </p>
            <p>
              <strong>
                How it works with functional and class components:
              </strong>
              <br />
              Context API is a great addition to react js and helps developers
              eliminate challenges when passing data. It is the ideal structure
              to share the data with different components and never pass data
              via props. Developers use it for special use cases. You may need
              to follow step by step guidelines to use API.
              <strong>Build context:</strong>
              <br />
              If you want to work with context API, you must build context with
              the help of create context function.
              <div className="mockup-code">
                <pre data-prefix=">">
                  <code>import React from 'react';</code>
                </pre>
                <pre data-prefix=">" className="text-warning">
                  <code>const MyContext = React.createContext();</code>
                </pre>
                <pre data-prefix=">" className="text-success">
                  <code>export default MyContext;</code>
                </pre>
              </div>
              Create method() is important to build context and route default
              value to variables and pass them. Once creating context, you can
              use the two react components like provider and consumer. React
              delivers a component and context object that reads a current value
              from the matching provider.
              <br />
              <strong> Make the provider:</strong>
              <br />
              After creating context, developers import context and use them to
              make a provider that calls MyProvider. In that scenario,
              developers initiate things with some values and share through
              value prop provider components. Provider components for wrapping
              components and engage them with access to context. It is a great
              method to minimize redux.
              <br />
              <strong>Create consumer: </strong>
              <br />
              You can import context again, wrap components with it, and
              introduce context arguments in a component. It is simple to use
              context and props consistently. Provider component is vital for
              you to wrap all components that acquire context. You will tell
              which component needs to consume data. Consumer component lets
              react component to focus on context change. It is essential to
              make data available utilizing render prop.
              <br />
              <strong>Use context: </strong>
              <br />
              Developers may also use react hooks in some time. React hooks
              allows developers to maintain data inside functional components
              and does not support class components to manage data. React comes
              up with in-built hooks like useEffect, useState, useCallback, and
              more. Using context is the most important hook in react and helps
              developers connect and consume context. The main role of
              useContext is to access a single argument.
              <br />
              UseContext is an ideal hook for managing a process cleaner than a
              consumer component. It is the best asset for developers to boost
              application maintainability. Using react context is better to
              allow properties to a component that nests deeply into the tree.
              It is a reliable solution for a different instance of the same
              component. Context API and hooks are a necessary part of
              real-world application. Import useContext and useState hooks from
              react are easy to build context that calls auth context.
            </p>
          </div>
        </div>
      </article>
      <article>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            <h3>What is the purpose of react router ?</h3>
          </div>
          <div className="collapse-content">
            <p>
              ReactJS Router is mainly used for developing Single Page Web
              Applications. React Router is used to define multiple routes in
              the application. When a user types a specific URL into the
              browser, and if this URL path matches any 'route' inside the
              router file, the user will be redirected to that particular route.
            </p>
          </div>
        </div>
      </article>
      <article className="mt-4">
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            <h3>What is useRef hook and how do you use it?</h3>
          </div>
          <div className="collapse-content">
            <p>
              A hook is a special function which enables one use state and other
              React features without writing ES6 class components which are
              generally considered difficult to understand, use and master.
              useRef hook is part of the React Hooks API. It is a function which
              takes a maximum of one argument and returns an Object. The
              returned object has a property called current whose value is the
              argument passed to useRef. If you invoke it without an argument,
              the returned object's current property is set to undefined. The
              code below illustrates how to invoke the useRef hook in functional
              components.
              <br />
              myRef, which is returned by a call to useRef hook is an object
              which looks like <code>current: null.</code> If invoked without an
              argument, then the returned object is{" "}
              <code> current: undefined</code>
              <br />
              <strong>What purpose does useRef hook serve?</strong>
              <br />
              Some of the use cases of useRef hook are: To access DOM elements
              To persist values in successive renders
              <br />
              <strong>Accessing DOM elements using useRef hook</strong>
              <br />
              One of the most common use case of useRef hook is to access DOM
              elements (NOT custom React component). For example if you want to
              access an input element after it has been mounted to the DOM,
              instead of using document.getElementById, document.querySelector
              or any other method for selecting DOM elements like in vanilla
              javascript, you can use useRef hook. This is illustrated in the
              example below.
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Blogs;
