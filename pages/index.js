import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
        <Link href='/blog'>
        <a>Blog</a>
        </Link>
        <Link href='/product'>
        <a>Products</a>
        </Link>
    </div>
  )
}
