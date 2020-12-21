import { Layer } from 'src/layers/types'

export const date: Layer<string, Date> = {
  name: 'Date parse',
  acceptsInput: (value) => {
    if (typeof value === 'number' && value > 0) {
      const year = new Date(value * 1000).getFullYear()
      const now = new Date().getFullYear()
      return year > now - 20 && year < now + 20
    }

    if (typeof value !== 'string') {
      return false
    }

    const date = Date.parse(value)

    return !isNaN(date)
  },
  parse: (value) => {
    return new Date(typeof value === 'number' ? value * 1000 : value)
  },
}
