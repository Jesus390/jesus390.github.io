import React from 'react';
import Navigation from '../components/Navigation';
import BlogPost from '../components/BlogPost';

import blogPosts from '../public/blog-posts.json';

const BlogPage = ({ posts }) => {
  return (
    <div>
      <Navigation />
      <center><h1 style={{color:'#2980b9'}}>Nuestro Blog</h1></center>
      {posts.map((post) => (
        <BlogPost key={post.title} post={post} />
      ))}
    </div>
  );
};

export async function getStaticProps() {
//   const res = await fetch('/blog-posts.json');
//   const posts = await res.json();

  return {
    props: { posts: blogPosts },
  };
}

export default BlogPage;