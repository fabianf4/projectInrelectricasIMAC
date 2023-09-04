import { sendMail } from '../../service/mailService'
import { NextResponse } from 'next/server'

export async function POST(req) {
  let { email, name, phone, message } = await req.json()
  await sendMail(`<h1>De: ${name}</h1>
  <h2>Email: ${email}</h2>
  <h2>Teléfono: ${phone}</h2>
  <h3>Mensaje: ${message}</h3>`)

  return NextResponse.json({ info: 'Mensaje enviado' })
}
