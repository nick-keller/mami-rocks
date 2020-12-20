import { Layer } from 'src/layers/types'

export const json: Layer<string, unknown> = {
  name: 'JSON parse',
  acceptsInput: (value) => {
    if (typeof value !== 'string') {
      return false
    }

    try {
      JSON.parse(value as string)
      return true
    } catch (error) {
      return false
    }
  },
  parse: (value) => JSON.parse(value),
}
