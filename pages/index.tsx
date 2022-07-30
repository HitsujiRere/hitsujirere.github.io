import type { NextPage } from 'next';
import Head from 'next/head';
import About from '../components/pages/About';
import Footer from '../components/pages/Footer';
import Header from '../components/pages/Header';
import Profile from '../components/pages/Profile';
import Start from '../components/pages/Start';
import Works from '../components/pages/Works';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Rere{"'"}s Portfolio</title>
        <meta name='description' content="Rere's Portfolio" />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />

      <main>
        <Start />

        <About />

        <Profile />

        <Works />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
