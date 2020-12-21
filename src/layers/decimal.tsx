import { Layer } from 'src/layers/types'

export const decimal: Layer<string, number> = {
  name: 'Decimal parse',
  acceptsInput: (value) => {
    if (typeof value !== 'string') {
      return false
    }

    return /^-?([0-9]+(\.[0-9]*)?|\.[0-9]+)$/.test(value)
  },
  parse: (value) => {
    return parseFloat(value)
  },
}
