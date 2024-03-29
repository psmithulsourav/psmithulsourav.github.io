import type { NextPage } from 'next'
import Head from 'next/head'
import Header from "../components/Header";
import Hero from "../components/Hero";



const Home: NextPage = () => {
  return (
<div>
    <Head>
        <title>P S Mithul Sourav</title>
        <link rel="icon" href="https://github.com/psmithulsourav/psmithulsourav.github.io/blob/main/version-2/public/pfp_nobg.svg?raw=true" />
    </Head>
  
  <div className="bg-cover bg-center bg-[#081c3c] overlow-hidden">
      <Header />
      <Hero />
  </div>
</div>
  )
}

export default Home