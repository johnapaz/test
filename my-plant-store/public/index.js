import Head from 'next/head';
import Hero from '../components/Hero';
import About from '../components/About';
import StoreLinks from '../components/StoreLinks';
import Contact from '../components/Contact';
import '../styles/global.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Plant Store</title>
        <meta name="description" content="A place where nature meets comfort" />
      </Head>
      <main>
        <Hero />
        <About />
        <StoreLinks />
        <Contact />
      </main>
    </div>
  );
}