const STORAGE_KEY = 'email_rate_limit'
const MAX_DAILY_SENDS = 3

interface RateLimitRecord {
  date: string
  count: number
}

const getTodayDate = (): string => {
  return new Date().toISOString().split('T')[0]
}

const getRecord = (): RateLimitRecord => {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored) {
    try {
      return JSON.parse(stored)
    } catch {
      return { date: getTodayDate(), count: 0 }
    }
  }
  return { date: getTodayDate(), count: 0 }
}

const saveRecord = (record: RateLimitRecord): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(record))
}

export const checkRateLimit = (): { allowed: boolean; remaining: number; message?: string } => {
  const today = getTodayDate()
  const record = getRecord()

  if (record.date !== today) {
    const newRecord = { date: today, count: 0 }
    saveRecord(newRecord)
    return { allowed: true, remaining: MAX_DAILY_SENDS }
  }

  if (record.count >= MAX_DAILY_SENDS) {
    return {
      allowed: false,
      remaining: 0,
      message: `今日邮件发送次数已达上限（${MAX_DAILY_SENDS}次），请明天再试`
    }
  }

  return { allowed: true, remaining: MAX_DAILY_SENDS - record.count }
}

export const incrementRateLimit = (): void => {
  const today = getTodayDate()
  const record = getRecord()

  if (record.date !== today) {
    saveRecord({ date: today, count: 1 })
  } else {
    saveRecord({ date: today, count: record.count + 1 })
  }
}