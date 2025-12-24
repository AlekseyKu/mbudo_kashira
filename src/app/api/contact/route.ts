import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json()

    // Валидация
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Пожалуйста, заполните все обязательные поля' },
        { status: 400 }
      )
    }

    // Проверка формата email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Некорректный формат email' },
        { status: 400 }
      )
    }

    // Отправка email через Resend
    // В тестовом режиме Resend требует использовать noreply@resend.dev для FROM
    // и отправлять на email, зарегистрированный в аккаунте
    const { data, error } = await resend.emails.send({
      from: 'noreply@resend.dev',
      to: process.env.CONTACT_EMAIL || 'dush-kashira@yandex.ru',
      subject: `Обратная связь от ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af;">Новое сообщение с сайта</h2>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <p><strong>Имя:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${phone ? `<p><strong>Телефон:</strong> ${phone}</p>` : ''}
            <p><strong>Сообщение:</strong></p>
            <p style="background-color: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
              ${message.replace(/\n/g, '<br>')}
            </p>
          </div>
          <p style="color: #6b7280; font-size: 12px; margin-top: 20px;">
            Это сообщение отправлено с сайта спортивной школы «Кашира»
          </p>
        </div>
      `,
      replyTo: email,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Ошибка при отправке сообщения. Попробуйте позже.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, message: 'Сообщение успешно отправлено!' },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Произошла ошибка. Попробуйте позже.' },
      { status: 500 }
    )
  }
}

