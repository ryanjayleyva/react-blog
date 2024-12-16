import styles from "../styles/hero.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const posts = [
  { slug: "git-setup", title: "Git Setup" },
  { slug: "github-setup", title: "GitHub Setup" },
  { slug: "neovim-setup", title: "Neovim Setup" },
];

const Hero = ({ author, about }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.author}>{author}</h1>
      <h2 className={styles.about}>{about}</h2>

      {/* Render list of blog posts */}
      <div className={styles.postsList}>
        <h2>Articles</h2>
        {posts.map((post) => (
          <div key={post.slug} className={styles.postItem}>
            <Link to={`/blog/${post.slug}`} className={styles.postLink}>
              {post.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

Hero.propTypes = {
  author: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};

export default Hero;
