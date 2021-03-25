import Head from 'next/head'
import Link from 'next/link'

export default function item(){
  return(
    <div className="row">
      <Head>
      </Head>
      <header>
        <nav className="navTop col-12">
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
      <main>
        this item index
      </main>
    </div>
  )
}