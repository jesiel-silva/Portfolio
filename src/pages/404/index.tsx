import Link from 'next/link'
import styles from './404.module.css'
import Container from '@/src/components/container'

export default function Pagina404() {
  return (
    <Container>
      <div className={styles.content}>
        <img src='assets/404.png' className={styles.img} />
        <h1 className={styles.text_h1}>Não conseguimos encontrar essa página</h1>
        <Link href='https://storyset.com/web'
          className={styles.link} target='_blank'>
          Web illustrations by Storyset
        </Link>
      </div>
    </Container>
  )
}