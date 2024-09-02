import React, { useState } from "react";
import "../styles/BlogForm.css";

const BlogForm = ({ addPost }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date || !title || !content) {
      setError("All fields are required");
      return;
    }

    addPost({ title, date, description: content.substring(0, 100) });
    setTitle("");
    setContent("");
    setDate("");
    setError("");
  };

  return (
    <div>
      <form className="blog-form" onSubmit={handleSubmit}>
        <h2>Add New Blog Post</h2>
        {error && <p className="error">{error}</p>}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
        ></textarea>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          name="date"
          id=""
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BlogForm;
