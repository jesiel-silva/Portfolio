
import styles from '../container/container.module.css'

export default function Container({children}) {
  return(
    <div className={styles.container}>
      {children}
    </div>
  )
}