'use client'

import styles from '../page.module.css'
import { useState } from 'react'
import Swal from 'sweetalert2'

export default function ContactUs() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  async function onSubmit(event) {
    event.preventDefault()

    const response = await fetch('/api/mail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        message
      })
    })

    const data = await response.json()

    setEmail('')
    setName('')
    setPhone('')
    setMessage('')

    Swal.fire('Mensaje enviado', data, 'success')
  }

  return (
    <section className={styles.contactanos} id="contacto">
      <h2 className={styles.contactanos__title}>Contactanos</h2>
      <form className={styles.contactanos__form} onSubmit={onSubmit}>
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className={styles.contactanos__row}>
          <label htmlFor="phone" className={styles.contactanos__label}>
            Teléfono <br />
          </label>
          <input
            type="tel"
            placeholder="Telefono"
            className={styles.contactanos__input}
            required
            id="phone"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <button type="submit" className={styles.contactanos__button}>
          Enviar
        </button>
      </form>
    </section>
  )
}
