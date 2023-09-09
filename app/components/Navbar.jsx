import Link from 'next/link'
import Image from 'next/image'
import Logo from './my-logo.png'

export default function Navbar() {
  return (
    <nav>
      <Image
        src={Logo}
        alt='my logo'
        width={30}
        placeholder='blur'
        quality={100}
      />
      <h1>Online Shop</h1>
      <div className="wrapper-link">
      <Link href="/">Home</Link>
      <Link href="/cart">🛒</Link>
      </div>
    </nav>
  )
}