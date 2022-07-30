import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../../components/pages/Header';
import WorkPage from '../../components/templates/WorkPage';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Rere{"'"}s Portfolio - Twattaa</title>
        <meta name='description' content="Rere's Portfolio - Twattaa" />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />

      <main>
        <WorkPage
          name='Twattaa'
          explains={['データベースの授業の演習にて作成・発表した匿名掲示板']}
          languages='JavaScript, PostgreSQL'
          frameworks='Node.js, Vue.js, Socket.IO'
          linkGitHub='https://github.com/HitsujiRere/Twattaa'
          images={['/img/twattaa/1.png', '/img/twattaa/2.png']}
        />
      </main>
    </div>
  );
};

export default Home;
