import { createI18n } from 'vue-i18n'
import zh from '@/locales/zh-CN'
import en from '@/locales/en'

const savedLang = localStorage.getItem('lang') || 'zh-CN'

const i18n = createI18n({
  legacy: false,
  locale: savedLang,      // 当前语言
  fallbackLocale: 'zh-CN', // 无法匹配时的回退语言
  messages: {
    'zh-CN': zh,
    'en': en
  }
})

export default i18n