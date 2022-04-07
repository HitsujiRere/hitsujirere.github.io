import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../../components/Header'
import WorkPage from '../../components/WorkPage'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Rere{"'"}s Portfolio</title>
        <meta name="description" content="Rere's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <WorkPage
          name='My Portfolio by Next.js'
          explains={["自分についてや、今まで作った作品をまとめたウェブページ"]}
          languages='Typescript'
          frameworks='Next.js, Tailwind CSS, p5.js'
          feelings={[
            "自分のウェブページを作るのは3回目。",
            "Next.js と Tailwind CSS を使えるようになったので、これらを駆使しておしゃれに作ることができた。"
          ]}
          linkWork="https://hitsujirere.github.io"
          linkGitHub="https://github.com/HitsujiRere/hitsujirere.github.io"
          images={["/img/my-webpage.png"]}
        />
      </main>

      {/* <Footer /> */}
    </div>
  )
}

export default Home;
