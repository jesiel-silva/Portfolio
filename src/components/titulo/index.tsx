import styles from './titulo.module.css'


export default function Title({title, subTitle}) {
  return (
    <div className={styles.content_Title}>
      <h1>{title}</h1>
      <p>{subTitle}</p>
    </div>
  )
}