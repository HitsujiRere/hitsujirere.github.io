import type { NextPage } from 'next';
import Head from 'next/head';
import { WorkPage } from '@/components/templates/WorkPage';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Rere{"'"}s Portfolio - Learn Processing more</title>
        <meta name='description' content="Rere's Portfolio - Learn Processing more" />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <WorkPage
        name='Learn Processing more'
        explains={['部内用のより発展的なProcessingの解説', '配列, リスト, クラスについて説明']}
        linkWork='https://github.com/HitsujiRere/LearnProcessing#readme'
        images={['/img/LearnProcessing.png']}
      />
    </div>
  );
};

export default Home;
