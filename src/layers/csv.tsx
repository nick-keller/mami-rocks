import { Layer } from 'src/layers/types'
import parse from 'csv-parse/lib/sync'

export const csv: Layer<string, Record<string,unknown>[]> = {
  name: 'CSV parse',
  acceptsInput: (value) => {
    if (typeof value !== 'string' || !value.includes(',')) {
      return false
    }

    try {
      parse(value, {
        columns: true,
        skip_empty_lines: true
      })
      return true
    } catch (error) {
      return false
    }
  },
  parse: (value) => parse(value, {
    columns: true,
    skip_empty_lines: true
  }),
}
