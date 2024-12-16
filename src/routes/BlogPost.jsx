import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

const BlogPost = () => {
  const { slug } = useParams(); // Get the slug from the URL
  const [content, setContent] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`/src/posts/${slug}.md`); // Fetch markdown file based on slug
        if (!response.ok) throw new Error("Post not found");
        const text = await response.text();
        setContent(text); // Update content with the markdown text
      } catch (err) {
        setError(err.message);
      }
    };

    fetchPost();
  }, [slug]);

  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>{slug.replace("-", " ").toUpperCase()}</h1>
      <ReactMarkdown>{content}</ReactMarkdown> {/* Render markdown */}
    </div>
  );
};

export default BlogPost;
