import { useState } from 'react'
import { useActiveRouter } from 'active-link-nextjs';

import styles from './mobile.module.css';
import MenuLink from '../menuLink';

export default function MenuMobile() {

  const config = { activeClass: styles.active }; //Mostra o link selecionado
  const { registerRoute } = useActiveRouter(config);

 
  return (
    <>
      <div className={styles.mobileContent} >
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
      </div>
    </>
  )
}