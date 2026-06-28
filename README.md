# Interelectricas IMAC

Sitio web corporativo de **INTERELECTRICAS IMAC S.A.S**, empresa colombiana de servicios de energía eléctrica y obras civiles.

> **Aviso:** Este sitio no es oficial. Fue desarrollado como proyecto universitario.

## Stack

- **Framework:** Next.js 15 (App Router)
- **Lenguaje:** JavaScript (JSX)
- **Estilos:** CSS Modules
- **Email:** Nodemailer (Gmail SMTP)
- **Notificaciones:** SweetAlert2

## Comenzar

```bash
pnpm install
pnpm dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Variables de entorno

Copiar `.env.example` a `.env` y configurar:

| Variable              | Descripción                       |
| --------------------- | --------------------------------- |
| `NODEMAILER_EMAIL`    | Correo remitente (Gmail)          |
| `NODEMAILER_PW`       | Contraseña de aplicación de Gmail |
| `NODEMAILER_EMAIL_TO` | Correo destino de los mensajes    |
| `NODEMAILER_SUBJECT`  | Asunto del correo                 |

## Scripts

| Comando      | Descripción            |
| ------------ | ---------------------- |
| `pnpm dev`   | Servidor de desarrollo |
| `pnpm build` | Build de producción    |
| `pnpm start` | Servidor de producción |
| `pnpm lint`  | ESLint                 |

## Estructura

```
src/
├── app/
│   ├── layout.jsx              # Layout raíz
│   ├── page.jsx                # Homepage
│   ├── globals.css             # Variables globales
│   ├── api/mail/route.js       # API de email
│   ├── components/
│   │   ├── MyNav.jsx           # Navegación
│   │   ├── ContactUs.jsx       # Formulario de contacto
│   │   └── SiteNotice.jsx      # Popup de aviso
│   └── service/
│       └── mailService.js      # Envío de emails
└── public/images/              # Assets estáticos
```

## Autor

[github.com/fabianf4](https://github.com/fabianf4)
