import { Layer } from 'src/layers/types'
import { decode } from 'jsonwebtoken'

export const jwt: Layer<string, unknown> = {
  name: 'JSON Web Token payload',
  acceptsInput: (value) => {
    if (typeof value !== 'string') {
      return false
    }

    try {
      return decode(value.replace(/\s+/g, '')) !== null
    } catch (error) {
      return false
    }
  },
  parse: (value) => decode(value.replace(/\s+/g, '')),
}
