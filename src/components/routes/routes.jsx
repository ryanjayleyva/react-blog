import App from "../../App";
import About from "../About/About";
import Header from "../Header/Header";

const routes = [
  {
    path: "/",
    element: (
      <div>
        <Header title="RJL" aboutMe="About" />
        <App />
      </div>
    ),
  },
  {
    path: "about",
    element: (
      <div>
        <Header title="RJL" aboutMe="About" />
        <About />
      </div>
    ),
  },
];

export default routes;
