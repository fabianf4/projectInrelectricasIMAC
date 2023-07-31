import styles from './page.module.css'
import Image from 'next/image'
import logoLargo from '../../public/images/logoLargo.jpeg'
import nosotros from '../../public/images/nosotros.jpg'
import menuHamburger from '../../public/images/icon-hamburger.svg'
import iconMision from '../../public/images/icon-snappy-process.svg'
import iconVision from '../../public/images/icon-people-first.svg'
import iconPhone from '../../public/images/icon-phone.svg'
import iconMail from '../../public/images/icon-mail.svg'
import iconLocation from '../../public/images/icon-location.svg'
import iconClock from '../../public/images/icon-clock.svg'
import iconFacebook from '../../public/images/icon-facebook.svg'

export default function Home() {
  return (
    <>
      <header className={`${styles.header} ${styles.container}`}>
        <nav className={`${styles.nav} ${styles.container}`}>
          <h1 className={styles.nav__title}>Interelectricas IMAC</h1>

          <div className={styles.nav__menu}>
          <a href="#inicio" className={styles.nav__link}>
              Inicio
            </a>            
            <a href="#nosotros" className={styles.nav__link}>
              Nosotros
            </a>
            <a href="#servicios" className={styles.nav__link}>
              Servicios
            </a>
            <a href="#" className={styles.nav__link}>
              Proyectos
            </a>
            <a href="#contacto" className={styles.nav__link}>
              Contacto
            </a>
          </div>
          <Image
            src={menuHamburger}
            alt="Menu hamburgesa"
            className={styles.nav__iconMenu}
          />
        </nav>
      </header>
      <main className={styles.main}>
        <section className={styles.nosotros} id="nosotros">
          <Image
            src={nosotros}
            alt="Imagen del equipo de trabajo"
            className={styles.nosotros__img}
            priority
          />
          <article className={styles.nosotros__text}>
            <h2 className={styles.nosotros__title}>Sobre Nosotros</h2>
            <p className={styles.nosotros__paragraph}>
              Estamos comprometidos con el desarrollo y servicio a nuestros
              clientes, los cuales se han convertido en nuestro mejor aliado.
              <br />
              Por eso, queremos ofrecer una amplia gama de servicios que puedan
              necesitar.
              <br />
              Contamos con un excelente posicionamiento en los sectores y
              mercados más importantes del país. Queremos seguir creciendo y
              generar el mayor valor a nuestros clientes.
              <br />
              Somos una empresa enfocada en cubrir las necesidades y
              expectativas de nuestros clientes mediante el ofrecimiento de
              productos y servicios de calidad proporcionados por personal con
              actitud de servicio, mejora continua y liderazgo partiendo de
              nuestros valores, principios de ética y profesionalismo.
            </p>
          </article>
        </section>
        <section className={styles.mision_vision}>
          <article
            className={`${styles.mision_vision__article}  ${styles.container}`}
          >
            <Image
              src={iconMision}
              alt="Icono rayo"
              className={styles.mision_vision__img}
            />
            <div>
              <h2 className={styles.mision_vision__title}>Mision</h2>
              <p className={styles.mision_vision__paragraph}>
                INTERELECTRICAS IMAC S.A.S Suministra servicios de energía
                eléctrica y obras civiles con efectividad, calidad y
                rentabilidad encaminados a la generación de valor de sus
                clientes, comunidades, colaboradores y accionistas.
              </p>
            </div>
          </article>
          <article className={styles.mision_vision__article}>
            <Image
              src={iconVision}
              alt="Icono persona"
              className={styles.mision_vision__img}
            />
            <div>
              <h2 className={styles.mision_vision__title}>Vision</h2>
              <p className={styles.mision_vision__paragraph}>
                INTERELECTRICAS IMAC S.A.S Ofrece oportuna y eficientemente
                servicios de energía eléctrica y obras civiles orientados a
                satisfacer las necesidadesde nuestros usuarios de forma segura.
              </p>
            </div>
          </article>
        </section>
        <section className={styles.servicios} id="servicios">
          <article className={styles.servicios__article}>
            <h2 className={styles.servicios__title}>Servicios</h2>
            <p className={styles.servicios__paragraph}>
              Brindamos servicios de Diseño, Construcción Expansión,
              Mantenimiento, Remodelación, Termografía, Ultrasonido, Inspección
              Exhaustiva y Despeje Forestal de líneas de energía, garantizando
              la mejor experiencia y satisfacción de nuestros Clientes y partes
              interesadas; cumpliendo los estándares de calidad y requisitos
              legales aplicables.
            </p>
          </article>
          <article className={styles.servicios__article}>
            <h3 className={styles.servicios__subtitle}>
              Conoce nuestro trabajo
            </h3>
            <a href="#" className={styles.servicios__button}>
              Como trabajamos
            </a>
          </article>
        </section>
      </main>
      <footer className={styles.footer}>
        <section className={styles.datos}>
          <div className={styles.datos__item}>
            <Image
              src={iconPhone}
              alt="Icono celular"
              className={styles.datos__icon}
            />
            <h3 className={styles.datos__description}>Llamanos</h3>
            <p className={styles.datos__info}>312 3425475</p>
          </div>
          <div className={styles.datos__item}>
            <Image
              src={iconMail}
              alt="Icono celular"
              className={styles.datos__icon}
            />
            <h3 className={styles.datos__description}>Email</h3>
            <p className={styles.datos__info}>info@interelectricasimac.com</p>
          </div>
          <div className={styles.datos__item}>
            <Image
              src={iconLocation}
              alt="Icono celular"
              className={styles.datos__icon}
            />
            <h3 className={styles.datos__description}>Ubicacion</h3>
            <p className={styles.datos__info}>Paipa-Boyaca</p>
          </div>
          <div className={styles.datos__item}>
            <Image
              src={iconClock}
              alt="Icono celular"
              className={styles.datos__icon}
            />
            <h3 className={styles.datos__description}>Nuestro horario</h3>
            <p className={styles.datos__info}>
              Lunes a viernes 08:00-12:00 14:00-18:00
            </p>
          </div>
          {/*
          <div className={styles.datos__social}>
            <a
              href="https://www.facebook.com/profile.php?id=100068720987563&sk=photos"
              target="_blank"
              className={styles.datos__socialIcon}
              >
              <Image
                src={iconFacebook}
                alt="Icono de facebook"
                className={styles.datos__socialImg}
              />
            </a>
          </div>
          */}
        </section>
        <section className={styles.contactanos} id="contacto">
          <h2 className={styles.contactanos__title}>Contactanos</h2>
          <form className={styles.contactanos__form}>
            <div className={styles.contactanos__row}>
              <label htmlFor="email" className={styles.contactanos__label}>
                Correo <br />
              </label>
              <input
                type="email"
                placeholder="Correo electronico"
                className={styles.contactanos__input}
                required
                id="email"
                name="email"
              />
            </div>
            <div className={styles.contactanos__row}>
              <label htmlFor="name" className={styles.contactanos__label}>
                Nombre <br />
              </label>
              <input
                type="text"
                placeholder="Nombre"
                className={styles.contactanos__input}
                required
                id="name"
                name="name"
              />
            </div>

            <div className={styles.contactanos__row}>
              <label htmlFor="phone" className={styles.contactanos__label}>
                Telefono <br />
              </label>
              <input
                type="tel"
                placeholder="Telefono"
                className={styles.contactanos__input}
                required
                id="phone"
                name="phone"
              />
            </div>

            <div className={styles.contactanos__row}>
              <label htmlFor="message" className={styles.contactanos__label}>
                Mensaje <br />
              </label>
              <textarea
                type="textarea"
                placeholder="Mensaje"
                className={styles.contactanos__input}
                required
                id="message"
                name="message"
              />
            </div>

            <input
              type="submit"
              value="Enviar"
              className={styles.contactanos__button}
            />
          </form>
        </section>
      </footer>
    </>
  )
}
