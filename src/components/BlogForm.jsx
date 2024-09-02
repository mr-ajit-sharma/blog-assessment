import React, { useState } from 'react';
import '../styles/BlogForm.css';

const BlogForm = ({ addPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) {
      setError('All fields are required');
      return;
    }

    addPost({ title, date: new Date().toLocaleDateString(), description: content.substring(0, 100) });
    setTitle('');
    setContent('');
    setError('');
  };

  return (
    <form className="blog-form" onSubmit={handleSubmit}>
      <h2>Add New Blog Post</h2>
      {error && <p className="error">{error}</p>}
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content"></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BlogForm;
