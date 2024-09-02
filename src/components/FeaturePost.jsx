import React from 'react';
import '../styles/FeaturedPost.css';

const FeaturedPost = () => {
  return (
    <section className="featured-post">
      <h2>Title of a longer featured blog post</h2>
      <p>
        Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.
      </p>
      <a href="#">Continue reading...</a>
    </section>
  );
};

export default FeaturedPost;
