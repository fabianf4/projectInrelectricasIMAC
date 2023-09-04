'use client'

import styles from '../page.module.css'
import Image from 'next/image'
import menuHamburger from '../../../public/images/icon-hamburger.svg'
import menuClose from '../../../public/images/icon-close.svg'

import { useState } from 'react'

export default function myNav() {
  const [menu, setMenu] = useState(false)
  return (
    <nav className={`${styles.nav} ${styles.container}`}>
      <h1 className={styles.nav__title}>Interelectricas IMAC</h1>

      <div className={!menu ? styles.nav__menu : styles.nav__menu__movil}>
        <a
          href="#inicio"
          className={styles.nav__link}
          onClick={() => setMenu(false)}
        >
          Inicio
        </a>
        <a
          href="#nosotros"
          className={styles.nav__link}
          onClick={() => setMenu(false)}
        >
          Nosotros
        </a>
        <a
          href="#servicios"
          className={styles.nav__link}
          onClick={() => setMenu(false)}
        >
          Servicios
        </a>
        <a
          href="#contacto"
          className={styles.nav__link}
          onClick={() => setMenu(false)}
        >
          Contacto
        </a>
      </div>
      <Image
        src={!menu ? menuHamburger : menuClose}
        alt="Menu hamburgesa"
        className={styles.nav__iconMenu}
        onClick={() => setMenu(!menu)}
      />
    </nav>
  )
}
