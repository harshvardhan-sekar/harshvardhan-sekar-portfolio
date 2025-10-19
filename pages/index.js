import Head from 'next/head'
import { useEffect } from 'react'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  useEffect(() => {
    // Initialize any client-side functionality here
    if (typeof window !== 'undefined') {
      // Add any initialization scripts from your original script.js
      console.log('Portfolio website loaded')
    }
  }, [])

  return (
    <>
      <Head>
        <title>Harshvardhan Sekar - Data Science Portfolio</title>
        <meta name="description" content="Portfolio of Harshvardhan Sekar - Data Scientist, ML Engineer, and Credit Risk Analyst" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}
