import styles from './contatos.module.css';

import { MdOutlineAlternateEmail } from 'react-icons/md'

import { FaGithubAlt, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'

import Container from '@/src/components/container';
import Title from '@/src/components/titulo';
import Link from 'next/link';


export default function Contatos() {
  return (
    <section className={styles.contatos}>

      <Container>

          <Title
            title='Contatos'
            subTitle='Me encontre aqui por esses contatos'
          />

        <div className={styles.content}>
          <div className={styles.wrapper}>

            <Link className={styles.box} href='mailto:jesiel.ppan@gmail.com' target='_blank'>
              <MdOutlineAlternateEmail size={40}/>
              <span>Email</span>
              <p>jesiel.ppan@gmail.com</p>
            </Link>

            <Link className={styles.box} href='https://api.whatsapp.com/send?phone=5592993222140' target='_blank'>
              <FaWhatsapp size={40} />
              <span>WhatsApp</span>
              <p>(92) 99322-2140</p>
            </Link>

            <Link className={styles.box} href='https://www.linkedin.com/in/jesiel-silva/' target='_blank'>
              <FaLinkedinIn size={40}/>
              <span>Linkedin</span>
              <p>@jesiel-silva</p>
            </Link>

            <Link className={styles.box} href='https://github.com/jesiel-silva/Sobre-Mim' target='_blank'>
              <FaGithubAlt size={40}/>
              <span>Github</span>
              <p>@jesiel-silva</p>
            </Link>

          </div>
        </div>

      </Container>
    </section>
  )
}