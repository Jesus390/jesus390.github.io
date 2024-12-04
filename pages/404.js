// pages/404.js
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

const Custom404 = () => {
  const title = "File Not Found";

  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <div className='e-div'>
        <h1 className='e-h1'>Oops! Page not found</h1>
        <p>The page you're looking for doesn't exist.</p>
        <Link className="e-link" href="/">Go back to homepage</Link>
      </div>
    </div>
  );
};

export default Custom404;