import styles from './banner.module.css'
import Image from 'next/image'

import { FaGithubAlt, FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa'
import Link from 'next/link'
import imgAvatar from '../../../public/assets/imgAvatar.jpg'
import Container from '../container'

export default function Banner() {
  return (
    <section className={styles.banner}>
      <Container>
        <div className={styles.content}>

          <div className={styles.infoContent}>

            <div className={styles.textInt}>
              <h1 className={styles.titleName}>jesiel <span>silva</span></h1>
              <p className={styles.textDev}>Desenvolvedor front-end</p>
              <div className={styles.mds}>
                <Link href='https://github.com/jesiel-silva/Sobre-Mim' target='_blank'><FaGithubAlt /></Link>
                <Link href='https://www.linkedin.com/in/jesiel-silva/' target='_blank'><FaLinkedinIn /></Link>
                <Link href='https://www.instagram.com/jesielsilva64/' target='_blank'><FaInstagram /></Link>
                <Link href='https://twitter.com/Jesiel_Dev' target='_blank'><FaTwitter /></Link>
              </div>
            </div>

            <div className={styles.avatar}>
              <Image className={styles.imgAvatar} src={imgAvatar} alt='Foto avatar' />
            </div>

          </div>

        </div>
      </Container>
    </section>
  )
}