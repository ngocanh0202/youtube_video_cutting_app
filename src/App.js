import Home from "./Pages/Home";
import Watch from "./Pages/Watch";
import Error from "./Pages/Error";
import "./CSS/App.css"
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import * as React from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/Watch/:VideoID",
    element: <Watch />,
  }
]);

function App() {
  return (
    <div className="App">
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>
    </div>
  );
}

export default App;
