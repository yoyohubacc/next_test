import Head from 'next/head'
import Link from 'next/link'
import NavTop from '../Tags/navTop'
import NavMidItem from '../Tags/navMidItem'

export default function image(){
  return(
    <div className="row">
      <Head>
      </Head>
      <header>
        <NavTop />
        <NavMidItem />
      </header>
      <main>
      image
      </main>
    </div>
  )
}