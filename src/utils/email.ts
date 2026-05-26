import emailjs from '@emailjs/browser'

// EmailJS 配置
// 请在 .env 文件中配置以下环境变量：
// VITE_EMAILJS_SERVICE_ID - EmailJS 服务 ID
// VITE_EMAILJS_TEMPLATE_ID - EmailJS 模板 ID
// VITE_EMAILJS_PUBLIC_KEY - EmailJS 公开 Key

const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ''
}

// 初始化 EmailJS
if (emailjsConfig.publicKey) {
  emailjs.init(emailjsConfig.publicKey)
}

/**
 * 发送邮件
 * @param templateParams 邮件参数
 * @returns Promise
 */
export const sendEmail = async (templateParams: {
  from_name: string
  from_email: string
  subject: string
  message: string
}) => {
  if (!emailjsConfig.serviceId || !emailjsConfig.templateId) {
    throw new Error('EmailJS 配置不完整，请检查环境变量')
  }

  try {
    const response = await emailjs.send(
      emailjsConfig.serviceId,
      emailjsConfig.templateId,
      templateParams
    )
    return { success: true, response }
  } catch (error) {
    console.error('邮件发送失败:', error)
    return { success: false, error }
  }
}

export default emailjs