'use client'

import { useEffect } from 'react'
import Swal from 'sweetalert2'

export default function SiteNotice() {
  useEffect(() => {
    Swal.fire({
      title: 'Aviso Importante',
      html: 'Este sitio web no es oficial. Fue desarrollado como proyecto universitario.<br><br>Puedes contactarme en <a href="https://github.com/fabianf4" target="_blank" rel="noopener noreferrer">github.com/fabianf4</a>',
      icon: 'info',
      confirmButtonText: 'Entendido'
    })
  }, [])

  return null
}
