import type { NextPage } from 'next'
import Head from 'next/head'
import Header from "../components/Header";
import Hero from "../components/Hero";


const Home: NextPage = () => {
  return (
    <div className="max-w-7xl mx-auto ">
      <Head>
        <title>P S Mithul SOurav</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Hero />
    </div>
  )
}

export default Home