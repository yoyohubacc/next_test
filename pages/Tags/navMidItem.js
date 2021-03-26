import Link from 'next/link'
import { useRouter } from 'next/router'

export default function NavMidItem(){
  return(
    <nav className="navMid">
      <Link href="/item">
        <a>Require</a>
      </Link>
      <Link href="/item/detail">
        <a>Detail</a>
      </Link>
      <Link href="/item/description">
        <a>Description</a>
      </Link>
      <Link href="/item/image">
        <a>Image</a>
      </Link>
      <Link href="/item/language">
        <a>Language</a>
      </Link>
  </nav>
  )
}