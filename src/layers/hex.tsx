import { Layer } from 'src/layers/types'

export const hex: Layer<string, number> = {
  name: 'Hex parse',
  acceptsInput: (value) => {
    if (typeof value !== 'string') {
      return false
    }

    return /^[0-9a-f]+$/i.test(value.trim())
  },
  parse: (value) => {
    return parseInt(value.trim(), 16)
  },
}
