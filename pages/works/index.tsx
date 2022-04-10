import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../../components/Header';
import Works from '../../components/Works';
import Footer from '../../components/Footer';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Rere{'\''}s Portfolio - Works</title>
        <meta name="description" content="Rere's Portfolio - Works" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <Works allWorks={true} />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
