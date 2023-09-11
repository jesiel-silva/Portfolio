import Link from 'next/link';
import styles from './botao.module.css';

export default function BotaoLink({ href, text }) {
  return (
    <Link
      href={href}
      className={styles.btnLink}>
      {text}
    </Link>
  )
}