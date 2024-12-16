import App from "../App.jsx";
import Header from "../components/Header.jsx";
import About from "./About.jsx";
import ErrorPage from "./ErrorPage.jsx";

const routes = [
  {
    path: "/",
    element: (
      <div>
        <Header title="RJL" aboutMe="About" />
        <App />
      </div>
    ),
    errorElement: <ErrorPage />,
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
  {
    path: "blog",
    element: (
      <div>
        <Header title="RJL" aboutMe="About" />
      </div>
    ),
  },
];

export default routes;
