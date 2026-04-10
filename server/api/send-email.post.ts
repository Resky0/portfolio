import { MailService } from '../services/mailService'
import type { MailConfig } from '../types/mail'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const body = await readBody(event)
  const { name, email, subject, message } = body

  if (!name || !email || !message) {
    throw createError({
      statusCode: 400,
      message: '请填写必填字段'
    })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    throw createError({
      statusCode: 400,
      message: '请输入有效的邮箱地址'
    })
  }

  const mailConfig: MailConfig = {
    host: process.env.SMTP_HOST || 'smtp.qq.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER || config.email.user || '',
      pass: process.env.SMTP_PASS || config.email.pass || ''
    },
    from: process.env.MAIL_FROM || process.env.SMTP_USER || config.email.user || '',
    to: process.env.MAIL_TO || config.email.user || ''
  }

  if (!mailConfig.auth.user || !mailConfig.auth.pass) {
    console.error('邮件配置不完整，请检查环境变量')
    throw createError({
      statusCode: 500,
      message: '邮件服务配置错误'
    })
  }

  try {
    const mailService = new MailService(mailConfig)

    if (process.env.NODE_ENV === 'development') {
      const isConnected = await mailService.verifyConnection()
      if (!isConnected) {
        throw createError({
          statusCode: 500,
          message: '邮件服务器连接失败'
        })
      }
    }

    const success = await mailService.sendContactEmail({
      name,
      email,
      subject,
      message
    })

    if (success) {
      return { success: true, message: '邮件发送成功' }
    } else {
      throw createError({
        statusCode: 500,
        message: '邮件发送失败'
      })
    }
  } catch (error) {
    console.error('邮件发送异常:', error)
    throw createError({
      statusCode: 500,
      message: '邮件发送失败，请稍后重试'
    })
  }
})