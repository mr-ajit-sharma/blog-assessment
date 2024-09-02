import React from 'react';
import '../styles/PostItem.css';

const PostItem = ({ title, date, description }) => {
  return (
    <article className="post-item">
      <h3>{title}</h3>
      <p>{date}</p>
      <p>{description}</p>
      <a href="#">Continue reading...</a>
    </article>
  );
};

export default PostItem;
