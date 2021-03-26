import Head from 'next/head'
import Link from 'next/link'
import NavTop from '../Tags/navTop'
import NavMidPrice from '../Tags/navMidPrice'

export default function modify(){
  return(
    <div className="row">
      <Head>
      </Head>
      <header>
        <NavTop />
        <NavMidPrice />
      </header>
      <main>
        modify
      </main>
    </div>
  )
}