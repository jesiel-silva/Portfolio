import Title from '@/src/components/titulo'
import styles from '../sobre/sobre.module.css'
import Container from '@/src/components/container'

export default function Sobre() {
  return (
    <section className={styles.sobre}>
      <Container>
        <div className={styles.content}>

          <Title
            title='Sobre mim'
            subTitle='Minha introdução'
          />

          <div className={styles.content_text}>
            <p>
              Olá meu nome é <span>Jesiel Silva</span>.
              Sou desenvolvedor Front-end com experiência em <strong>React.js, Next.js, JavaScript,
              Styled Components, CSS Module</strong> e consumo de APIs REST.
              Apaixonado por desenvolvimento de componentes reutilizáveis.
              Também possuo conhecimento em <strong>HTML5</strong> e <strong>CSS3</strong>.<br />
              Tenho formação em Análise e desenvolvimento de Sistemas desde 2018, 
              atualmente estou focado em desenvolvimendo de sistemas webs.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}