import {useState, useEffect} from 'react'
import { useRouter } from 'next/router'

import Head from 'next/head'
import Link from 'next/link'

import NavTop from './Tags/navTop'

export default function Home({data}) {
  return (
    <div>
      <Head>
        <title>여기서 부터</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>

      <header>
        <NavTop />
      </header>

      <main>
        <section>1</section>
      </main>
      
      <footer>
        <div>footer</div>
        
      </footer>
    </div>
  )
}

// export async function getServerSideProps(){
//   var fetchMethod ={
//     body: JSON.stringify({ 'fetch':1 }),
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     method: 'GET'
//   }
//   const res = await fetch('http://192.168.219.106:33333',fetchMethod)
//   if(res.redirected){
//     return{
//       redirect:{
//         destination:'/login'
//       }
//     }
//   }
//   // const data =await res.json()
//   console.log(res);
//   return {props:{}}
//   // var data = ''
//   // if(res.size==0) data = {'res':0}
//   // else data =await res.json()
//   // if(!data){
//   //   return{
//   //     redirect:{
//   //       destination:'http://www.google.com'
//   //     }
//   //   }
//   // }else{
//   //   return {props:{data}}
//   // }
// }