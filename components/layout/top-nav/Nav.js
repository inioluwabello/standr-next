import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="top-nav">
      <ul>
        <li>
          <Link href="/contact">Contact Us</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="/faq">FAQ</Link>
        </li>
      </ul>
    </nav>
  );
}
