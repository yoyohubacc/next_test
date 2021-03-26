import Link from 'next/link'

export default function NavMidPrice(){
  return(
    <nav className="navMid">
      <Link href="/price">
        <a>Summary</a>
      </Link>
      <Link href="/price/modify">
        <a>Modify</a>
      </Link>
      <Link href="/price/margin">
        <a>Margin</a>
      </Link>
      <Link href="/price/marketfee">
        <a>Market Fee</a>
      </Link>
      <Link href="/price/paymentfee">
        <a>Payment Fee</a>
      </Link>
      <Link href="/price/translatefee">
        <a>Translate Fee</a>
      </Link>
      <Link href="/price/shippingfee">
        <a>Shipping Fee</a>
      </Link>
  </nav>
  )
}