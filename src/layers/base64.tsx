import { Layer } from 'src/layers/types'

export const base64: Layer<string, string> = {
  name: 'Base 64 decode',
  acceptsInput: (value) => {
    if (typeof value !== 'string' || !/^[0-9a-z+/\n]+=*$/i.test(value)) {
      return false
    }

    const result = Buffer.from(value.replace(/\s+/g, ''), 'base64').toString('utf8')

    return result.length > 0 && /^[\u0020-\u007e\u00a0-\u00ff]*$/.test(result)
  },
  parse: (value) => {
    return Buffer.from(value.replace(/\s+/g, ''), 'base64').toString('utf8')
  },
}
