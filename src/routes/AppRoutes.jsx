import App from "../App.jsx";
import Header from "../components/Header.jsx";
import About from "./About.jsx";
import BlogPost from "./BlogPost.jsx"; // Import BlogPost component
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
    path: "blog/:slug", // Dynamic blog post route
    element: (
      <div>
        <Header title="RJL" aboutMe="About" />
        <BlogPost />
      </div>
    ),
    errorElement: <ErrorPage />,
  },
];

export default routes;
