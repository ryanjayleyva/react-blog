import App from "../../App";
import About from "../About/About";
import Header from "../Header/Header";

const routes = [
  {
    path: "/",
    element: (
      <>
        <Header title="RJL" />
        <App />
      </>
    ),
  },
  {
    path: "about",
    element: (
      <>
        <Header title="RJL" />
        <About />
      </>
    ),
  },
  {
    path: "about/about",
    element: (
      <>
        <Header title="RJL" />
        <About />
      </>
    ),
  },
];

export default routes;
