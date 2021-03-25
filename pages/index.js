import {useState, useEffect} from 'react'
import { useRouter } from 'next/router'

import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import testSty from '../styles/test.module.css'

export default function Home({data}) {
  return (
    <div className="colContainer">
      <Head>
        <title>여기서 부터</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>

      <header className="colContainer col-12">
        <nav className="navTop">
          <Link href="/">
            <a className="col-1">LOGO</a>
          </Link>
          <Link href="/item">
            <a className="col-1">아이템</a>
          </Link>
          <Link href="/">
            <a className="col-1">아이템</a>
          </Link>
        </nav>
      </header>

      <main className="flexContainer col-12">
        <section className="flex-1">1</section>
        <section className="flex-1">2</section>
        <section className="flex-1">3</section>
        <section className="flex-2">4</section>
        <section className="flex-1">5</section>
        <section className="flex-1">6</section>
        <section className="flex-1">7</section>
      </main>
      
      <footer className="col-12">
        footer
      </footer>
    </div>
  )
}

export async function getServerSideProps(){
  var fetchMethod ={
    body: JSON.stringify({ 'fetch':1 }),
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'DELETE'
  }
  const res = await fetch('http://localhost:33333/item',fetchMethod)
  var data = ''
  if(res.size==0) data = {'res':0}
  else data =await res.json()
  if(!data){
    return{
      redirect:{
        destination:'http://www.google.com'
      }
    }
  }else{
    return {props:{data}}
  }
}