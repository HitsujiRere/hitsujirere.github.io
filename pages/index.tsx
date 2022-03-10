import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Details from '../components/Details';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Hitsuji Rere</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='max-w-screen-xl mx-auto'>
        <Header />

        <main>
          {/* About */}
          <div>
            <h2 id='about' className='text-3xl font-bold text-center p-6 typewriter'>
              About
            </h2>

            <div className="bg-black p-8 text-white text-xl w-max mx-auto my-6">
              <div className='space-y-6 whitespace-pre-wrap'>
                <p>const Name = {"'"}Hitsuji Rere{"'"};</p>
                <p>const なまえ = {"'"}ひつじ れれ{"'"};</p>
                <p>
                  const Twitter = {}
                  <Link href='https://twitter.com/HitsujiRere'>
                    <a className='underline'>@HitsujiRere</a>
                  </Link>
                  ;
                </p>
                <p>
                  const GitHub = {}
                  <Link href='https://github.com/HitsujiRere'>
                    <a className='underline'>HitsujiRere</a>
                  </Link>
                  ;
                </p>
              </div>
            </div>
          </div>

          {/* Skill */}
          <div>
            <h2 id='skill' className='text-3xl font-bold text-center p-6'>
              Skill
            </h2>

            <div className="bg-black p-8 text-white text-xl w-max mx-auto my-6">
              <div className='space-y-6 whitespace-pre-wrap'>
                <Details
                  startOpen={true}
                  summaryOpen={<p>const Languages = &#123;</p>}
                  summaryClose={<p>const Languages = &#123;...&#125;</p>}
                  className='space-y-6'
                  child={
                    <div className='space-y-6'>
                      <p>  Good: [</p>
                      <p>    C, C++, C#, JS, Python,</p>
                      <p>  ],</p>
                      <p>  HadUsed: [</p>
                      <p>    TS, Java,</p>
                      <p>  ],</p>
                      <p>  Leaning: [</p>
                      <p>    Rust, TS,</p>
                      <p>  ],</p>
                      <p>{'}'};</p>
                    </div>
                  }
                />
                <Details
                  startOpen={true}
                  summaryOpen={<p>const Skill = &#123;</p>}
                  summaryClose={<p>const Skill = &#123;...&#125;</p>}
                  className='space-y-6'
                  child={
                    <div className='space-y-6'>
                      <p>  CompetitiveProgramming: {'{'}</p>
                      <p>    Using: [ C++ ],</p>
                      <p>    AtCoder: {'{'}</p>
                      <p>      User: {}
                        <Link href='https://atcoder.jp/users/Deji'>
                          <a className='underline'>Deji</a>
                        </Link>
                        ,
                      </p>
                      <p>      HighestRate: 1455,</p>
                      <p>    {'}'},</p>
                      <p>  {'}'},</p>
                      <p>{'}'};</p>
                    </div>
                  }
                />
              </div>
            </div>
          </div>

          {/* Awards */}
          <div>
            <h2 id='awards' className='text-3xl font-bold text-center p-6'>
              Awards
            </h2>

            <div className="bg-black p-8 text-white text-xl w-max mx-auto my-6">
              <div className='space-y-6 whitespace-pre-wrap'>
                <Details
                  startOpen={true}
                  summaryOpen={<p>const Award = &#123;</p>}
                  summaryClose={<p>const Award = &#123;...&#125;</p>}
                  className='space-y-6'
                  child={
                    <div className='space-y-6'>
                      <Details
                        startOpen={true}
                        summaryOpen={<p>  DCON2021: &#123;</p>}
                        summaryClose={<p>  DCON2021 = &#123;...&#125;</p>}
                        className='space-y-6'
                        child={
                          <div className='space-y-6'>
                            <p>    Result: 7th,</p>
                            <p>    Product: おしゃべる,</p>
                            <p>  {'}'},</p>
                          </div>
                        }
                      />
                      <Details
                        startOpen={true}
                        summaryOpen={<p>  HIT2020: &#123;</p>}
                        summaryClose={<p>  HIT2020 = &#123;...&#125;</p>}
                        className='space-y-6'
                        child={
                          <div className='space-y-6'>
                            <p>    Result: ICTまちづくり賞,</p>
                            <p>    Product: シマエーる,</p>
                            <p>  {'}'},</p>
                          </div>
                        }
                      />
                      <Details
                        startOpen={true}
                        summaryOpen={<p>  パソコン甲子園2020: &#123;</p>}
                        summaryClose={<p>  パソコン甲子園2020 = &#123;...&#125;</p>}
                        className='space-y-6'
                        child={
                          <div className='space-y-6'>
                            <p>    Result: プログラミング部門本選出場,</p>
                            <p>  {'}'},</p>
                          </div>
                        }
                      />
                      <Details
                        startOpen={true}
                        summaryOpen={<p>  高専プロコン2020: &#123;</p>}
                        summaryClose={<p>  高専プロコン2020 = &#123;...&#125;</p>}
                        className='space-y-6'
                        child={
                          <div className='space-y-6'>
                            <p>    Result: {'{'}</p>
                            <p>      自由部門: 特別賞,</p>
                            <p>      パテント審査部門: 奨励賞,</p>
                            <p>    {'}'},</p>
                            <p>  {'}'},</p>
                          </div>
                        }
                      />
                      <p>{'}'};</p>
                    </div>
                  }
                />
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h2 id='products' className='text-3xl font-bold text-center p-6'>
              Products
            </h2>

            <div className="bg-black p-8 text-white text-xl w-max mx-auto my-6">
              <div className='space-y-6 whitespace-pre-wrap'>
                <Details
                  startOpen={true}
                  summaryOpen={<p>const Products = &#123;</p>}
                  summaryClose={<p>const Products = &#123;...&#125;</p>}
                  className='space-y-6'
                  child={
                    <div className='space-y-6'>
                      <p>  Writing...</p>
                      <p>{'}'};</p>
                    </div>
                  }
                />
              </div>
            </div>
          </div>

        </main>

        <Footer />
      </div>
    </div>
  )
}

export default Home
