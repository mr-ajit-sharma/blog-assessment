import React from 'react';
import PostItem from './PostItem';
import '../styles/PostList.css';

const PostList = ({ posts }) => {
  return (
    <section className="post-list">
      {posts.map((post, index) => (
        <PostItem key={index} title={post.title} date={post.date} description={post.description} />
      ))}
    </section>
  );
};

export default PostList;
