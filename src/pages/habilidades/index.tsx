import styles from './habilidades.module.css'

import { FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa'
import { DiJavascript } from 'react-icons/di'
import { SiNextdotjs } from 'react-icons/si'

import Container from '@/src/components/container'
import Title from '@/src/components/titulo'
import CardSkill from '@/src/components/cardSkill'

export default function Habilidades() {


  return (
    <section className={styles.Habilidades}>
      <Container>
        <div className={styles.content}>

          <Title
            title='Habilidades'
            subTitle='Minhas Hard Skills'
          />

          <div className={styles.cardWepper}>

            <div className={styles.content_card}>

              <CardSkill
                title='Html5'
                svg={<FaHtml5 />}
              />

              <CardSkill
                title='CSS3'
                svg={<FaCss3Alt />}
              />

              <CardSkill
                title='JavaScript'
                svg={<DiJavascript />}
              />

              <CardSkill
                title='React.js'
                svg={<FaReact />}
              />

              <CardSkill
                title='Next.js'
                svg={<SiNextdotjs />}
              />             


            </div>
          </div>

        </div>
      </Container>
    </section>
  )
}