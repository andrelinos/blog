import {
  differenceInHours,
  differenceInMinutes,
  formatDistanceToNow,
} from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function formatDate(date: Date | string | null | undefined) {
  if (date) {
    const nowDate = new Date()

    try {
      const differenceMinutes = differenceInMinutes(nowDate, date)
      const diferenceHours = differenceInHours(nowDate, date)

      if (differenceMinutes < 60) {
        return formatDistanceToNow(date, {
          locale: ptBR,
          addSuffix: false,
        })
      } else if (diferenceHours < 24) {
        return `${diferenceHours} hora${diferenceHours === 1 ? '' : 's'}`
      } else {
        return `${formatDistanceToNow(date, { locale: ptBR, addSuffix: false })}`
      }
    } catch {
      return ''
    }
  }
}
