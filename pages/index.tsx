import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Profile from '../components/Profile'
import Footer from '../components/Footer'

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
        <Profile />
      </main>

      <Footer />
    </div>
  )
}

export default Home;
