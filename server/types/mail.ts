export interface MailConfig {
  host: string
  port: number
  secure: boolean
  auth: {
    user: string
    pass: string
  }
  from: string
  to: string
}

export interface MailData {
  name: string
  email: string
  subject?: string
  message: string
}