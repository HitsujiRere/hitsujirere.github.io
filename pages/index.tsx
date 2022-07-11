import type { NextPage } from 'next';
import Head from 'next/head';
import About from '../components/About';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Profile from '../components/Profile';
import Start from '../components/Start';
import Works from '../components/Works';

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
