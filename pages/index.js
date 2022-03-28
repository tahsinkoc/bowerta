import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Content from '../components/Content'
import styles from '../styles/Home.module.css'
import About from '../components/About'
import Footer from '../components/Footer'
import Services from '../components/Services'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Content />
      <About />
      <Services />
      <Footer />
    </div>
  )
}
