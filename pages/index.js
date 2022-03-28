import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Content from '../components/Content'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Content />
    </div>
  )
}
