import nodemailer from 'nodemailer'
import type { MailConfig, MailData } from '../types/mail'

export class MailService {
  private transporter: nodemailer.Transporter
  private config: MailConfig

  constructor(config: MailConfig) {
    this.config = config
    this.transporter = nodemailer.createTransporter({
      host: config.host,
      port: config.port,
      secure: config.secure,
      auth: {
        user: config.auth.user,
        pass: config.auth.pass
      }
    })
  }

  async sendContactEmail(data: MailData): Promise<boolean> {
    try {
      const mailOptions = {
        from: this.config.from,
        to: this.config.to,
        subject: data.subject || `[联系表单] 来自 ${data.name}`,
        text: `
姓名: ${data.name}
邮箱: ${data.email}
主题: ${data.subject || '无'}

消息内容:
${data.message}
        `.trim(),
        html: `
          <h3>收到新的联系表单提交</h3>
          <p><strong>姓名:</strong> ${data.name}</p>
          <p><strong>邮箱:</strong> ${data.email}</p>
          <p><strong>主题:</strong> ${data.subject || '无'}</p>
          <hr>
          <p><strong>消息内容:</strong></p>
          <p>${data.message.replace(/\n/g, '<br>')}</p>
        `
      }

      const info = await this.transporter.sendMail(mailOptions)
      console.log('邮件发送成功:', info.messageId)
      return true
    } catch (error) {
      console.error('邮件发送失败:', error)
      throw error
    }
  }

  async verifyConnection(): Promise<boolean> {
    try {
      await this.transporter.verify()
      console.log('邮件服务器连接验证成功')
      return true
    } catch (error) {
      console.error('邮件服务器连接验证失败:', error)
      return false
    }
  }
}