import { RouterProvider } from "react-router-dom";
import "./App.css";
import route from "./Components/Router/Router";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
      <section>
        <RouterProvider router={route}></RouterProvider>
      </section>
  );
}

export default App;
