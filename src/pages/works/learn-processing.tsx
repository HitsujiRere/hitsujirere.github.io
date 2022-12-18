import type { NextPage } from 'next';
import Head from 'next/head';
import { WorkPage } from '@/components/templates/WorkPage';

const Home: NextPage = () => {
  return (
    <WorkPage
      name='Learn Processing more'
      explains={['部内用のより発展的なProcessingの解説', '配列, リスト, クラスについて説明']}
      linkWork='https://github.com/HitsujiRere/LearnProcessing#readme'
      images={['/img/LearnProcessing.png']}
    />
  );
};

export default Home;
