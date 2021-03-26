import Link from 'next/link'

export default function NavTop(){
  return(
    <nav className="navTop">
      <Link href="/">
        <a>LOGO</a>
      </Link>
      <Link href="/item">
        <a>Item</a>
      </Link>
      <Link href="/price">
        <a>Price</a>
      </Link>
      <Link href="/shipping">
        <a>Shipping</a>
      </Link>
      <Link href="/finance">
        <a>Finance</a>
      </Link>
      <Link href="/admin">
        <a>admin</a>
      </Link>
      <Link href="/shipping">
        <a>SHIPPING</a>
      </Link>
      <Link href="/login">
        <a>login</a>
      </Link>
  </nav>
  )
}