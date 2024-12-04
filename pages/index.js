// pages/index.js
import Navigation from '../components/Navigation'; // Adjust path if needed
import Footer from '../components/footer';
import Header from '../components/Header';
import AboutMe from '../components/AboutMe';
import Head from 'next/head';

export default function Index() {
  const title = ".:Ai:. | jespinola";
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Navigation />
      <Header />
      <AboutMe />
      <Footer />
    </div>
  );
}