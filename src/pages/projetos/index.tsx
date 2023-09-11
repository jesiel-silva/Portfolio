import styles from './projetos.module.css';

import Container from '@/src/components/container';
import Title from '@/src/components/titulo';
import BotaoLink from '@/src/components/botao';

export default function Projetos() {
  return (
    <section className={styles.projetos}>
      <Container>
        <Title
          title='Projetos'
          subTitle='Algumas coisa que fiz'
        />

          <div className={styles.cardWepper}>
            <div className={styles.content_card}>

              <div className={styles.card}>
                <img src='assets/todoList.png' alt='Imagem do projeto' />
                <div className={styles.detalhes}>
                  <p>To-do-List - Organize suas tarefas</p>
                </div>
                <div className={styles.descri}>
                  <BotaoLink
                    href='https://todo-lista-de-tarefas-oe01gdoi1-jesiel-silva.vercel.app/'
                    text='Ir para o projeto'
                  />

                  {/* <BotaoLink
                    href=''
                    text='Ver todos'
                  /> */}
                </div>
              </div>

              <div className={styles.card}>
                <img src='assets/calc.png' alt='Imagem do projeto' />
                <div className={styles.detalhes}>
                  <p className={styles.titleProjeto}>Projeto 2</p>
                </div>
                <div className={styles.descri}>
                  <BotaoLink
                    href='https://calculadora-react-rose-eight.vercel.app/'
                    text='Ir para o projeto'
                  />

                  {/* <BotaoLink
                    href=''
                    text='Ver todos'
                  /> */}
                </div>
              </div>

              <div className={styles.card}>
                <img src='https://www.praiagrande.sp.leg.br/botoes-logos/Construcao.png' alt='Imagem do projeto' />
                <div className={styles.detalhes}>
                  <p className={styles.titleProjeto}>Projeto 3</p>
                </div>
                <div className={styles.descri}>
                  <BotaoLink
                    href=''
                    text='Ir para o projeto'
                  />

                 {/*  <BotaoLink
                    href=''
                    text='Ver todos'
                  /> */}
                </div>
              </div>

              <div className={styles.card}>
                <img src='https://www.praiagrande.sp.leg.br/botoes-logos/Construcao.png' alt='Imagem do projeto' />
                <div className={styles.detalhes}>
                  <p className={styles.titleProjeto}>Projeto 4</p>
                </div>
                <div className={styles.descri}>
                  <BotaoLink
                    href=''
                    text='Ir para o projeto'
                  />

                 {/*  <BotaoLink
                    href=''
                    text='Ver todos'
                  /> */}
                </div>
              </div>

              
            </div>

          </div>
      </Container>
    </section>
  )
}