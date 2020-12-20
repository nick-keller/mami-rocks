import { Layer } from 'src/layers/types'

export const uri: Layer<string, string> = {
  name: 'URI decode',
  acceptsInput: (value) => {
    if (typeof value !== 'string') {
      return false
    }

    return /%[0-9a-f]{2}/i.test(value)
  },
  parse: (value) => {
    return decodeURI(value)
  },
}
