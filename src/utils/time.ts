import { dayjs } from 'element-plus'
export const formatTime = (time: string | number | Date) => dayjs(time).format('YYYY.MM.DD')

export const calculalteTime = (time: string | number | Date) => {
  const now = dayjs()
  const targetTime = dayjs(time)
  const diff = now.diff(targetTime, 'day')

  if (diff < 0) {
    return '未来时间'
  } else if (diff === 0) {
    return '今天'
  } else if (diff === 1) {
    return '昨天'
  } else {
    return `${diff} 天前`
  }
}
