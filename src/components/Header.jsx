import styles from './Header.module.css'

import IgniteLogo from '../assets/igniteLogo.svg'
//Importo a imagem e passo como propriedade js na tag
export function Header() {
  return(
    <header className={styles.header}>
      <img src={IgniteLogo}  alt="Ignite Logo" />
    </header>
  )
}