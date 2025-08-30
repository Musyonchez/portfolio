import { FC } from 'react';
import Head from 'next/head';
import { Navbar } from '../components/common/Navbar';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Services } from '../components/sections/Services';
import { Experience } from '../components/sections/Experience';
import { Projects } from '../components/sections/Projects';
import { Contact } from '../components/sections/Contact';
import { Footer } from '../components/common/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Musyoka Philip Mutuku | Full-Stack Developer</title>
        <meta name="description" content="Full-Stack Web Developer specializing in React, Next.js, TypeScript, and Node.js. Creating innovative digital solutions from Nairobi, Kenya." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Full-Stack Developer, React, Next.js, TypeScript, Node.js, Web Development, Kenya, Nairobi" />
        <meta name="author" content="Musyoka Philip Mutuku" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Musyoka Philip Mutuku | Full-Stack Developer" />
        <meta property="og:description" content="Full-Stack Web Developer creating innovative digital solutions with modern technologies" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://musyonchez.vercel.app" />
        <meta property="og:image" content="/og-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Musyoka Philip Mutuku | Full-Stack Developer" />
        <meta name="twitter:description" content="Full-Stack Web Developer creating innovative digital solutions" />
        <meta name="twitter:image" content="/og-image.jpg" />
        
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://musyonchez.vercel.app" />
      </Head>

      <div className="min-h-screen bg-black text-white font-sans antialiased overflow-x-hidden">
        {/* Background Grid Pattern */}
        <div className="fixed inset-0 -z-10 h-full w-full bg-black bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-cyan-400 opacity-20 blur-[100px]"></div>
        </div>

        <Navbar />
        
        <main>
          <Hero />
          <About />
          <Services />
          <Experience />
          <Projects />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </>
  );
}