import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import About from '../components/About';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Rere{'\''}s Portfolio - About</title>
        <meta name="description" content="Rere's Portfolio - About" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <About allAbout={true} />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
