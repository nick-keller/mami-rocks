import { Layer } from 'src/layers/types'
import qs from 'qs'

export const queryString: Layer<string, qs.ParsedQs> = {
  name: 'Query string parse',
  acceptsInput: (value) => {
    if (typeof value !== 'string') {
      return false
    }

    return /.=.+&.+=./.test(value)
  },
  parse: (value) => {
    return qs.parse(value.replace(/^\?/, ''))
  },
}
