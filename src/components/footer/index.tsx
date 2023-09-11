import styles from './footer.module.css';

export default function Footer() {

  const year = new Date().getFullYear();

  return (
    <section className={styles.footer}>
      <p>Copyright &copy; {year} - Desenvolvido por Jesiel Silva</p>
    </section>
  )
}