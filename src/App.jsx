import React, { useState } from 'react';
import Header from './components/Header';
import FeaturedPost from './components/FeaturePost';
import PostList from './components/PostList';
import BlogForm from './components/BlogForm';
import './App.css';
import Footer from './components/Footer';

const App = () => {
  const [posts, setPosts] = useState([
    { title: 'Sample blog post', date: 'January 1, 2014', description: 'This blog post shows a few different types of content that’s supported and styled with Bootstrap.' },
  ]);

  const addPost = (post) => {
    setPosts([post, ...posts]);
  };

  return (
    <div className="App">
      <Header />
      <FeaturedPost />
      <BlogForm addPost={addPost} />
      <PostList posts={posts} />
      <Footer/>
    </div>
  );
};

export default App;
