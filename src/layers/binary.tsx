import { Layer } from 'src/layers/types'

export const binary: Layer<string, number> = {
  name: 'Binary parse',
  acceptsInput: (value) => {
    if (typeof value !== 'string') {
      return false
    }

    return /^[01]+$/.test(value.trim())
  },
  parse: (value) => {
    return parseInt(value.trim(), 2)
  },
}
