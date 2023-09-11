import styles from './cardSkill.module.css'

export default function CardSkill({ title, svg }) {
  return (
    <div className={styles.card}>
      <span>{title}</span>
      <div className={styles.imgSkill}>{svg}</div>
    </div>
  )
}