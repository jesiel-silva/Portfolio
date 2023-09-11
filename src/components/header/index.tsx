import { useState } from 'react'
import styles from './header.module.css'
import { useActiveRouter } from 'active-link-nextjs';

import Container from '../container';
import { TfiMenu } from 'react-icons/tfi';
import MenuMobile from '../menuMobile';
import MenuLink from '../menuLink';

const config = { activeClass: styles.active}; //Mostra o link selecionado


export default function Header() {
  
  const { registerRoute } = useActiveRouter(config);

  const [menuClose, setMenuClose] = useState(false);

  /* Function toggleBtn */
  function toggleBtn() {
    setMenuClose(!menuClose)
  }


  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.content}>

          <div className={styles.logo}>
            <a href='/'>jesiel <span>silva</span></a>
          </div>

          <nav>
            <ul className={styles.menu}>
              <MenuLink               
                {...registerRoute([''])}
                texto='inicio'
              />

              <MenuLink
                {...registerRoute(['sobre'])}
                texto='sobre'
              />

              <MenuLink 
                {...registerRoute(['habilidades'])}
                texto='habilidades'
              />

              <MenuLink 
                {...registerRoute(['projetos'])}
                texto='projetos'
              />

              <MenuLink 
                {...registerRoute(['contatos'])}
                texto='contatos'
              />
            </ul>
          </nav>



          <button className={styles.btnMenuOpen} onClick={toggleBtn}>
            <TfiMenu size={28} />
          </button>

          {
            menuClose && (<MenuMobile />)
          }

        </div>
      </Container>
    </header>
  )
}
