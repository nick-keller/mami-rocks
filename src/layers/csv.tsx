import { Layer } from 'src/layers/types'
import parse from 'csv-parse/lib/sync'

const parseCSV = (value: string) => {
  try {
    const result = parse(value, {
      columns: true,
      delimiter: ',',
      skip_empty_lines: true
    })

    if (Object.keys(result[0]).length > 1) {
      return result
    }
  } catch (error) {}

  try {
    const result = parse(value, {
      columns: true,
      delimiter: ';',
      skip_empty_lines: true
    })

    if (Object.keys(result[0]).length > 1) {
      return result
    }
  } catch (error) {}

  return parse(value, {
    columns: true,
    delimiter: '\t',
    skip_empty_lines: true
  })
}

export const csv: Layer<string, Record<string,unknown>[]> = {
  name: 'CSV parse',
  acceptsInput: (value) => {
    if (typeof value !== 'string') {
      return false
    }

    try {
      const result = parseCSV(value)

      return true
    } catch (error) {
      return false
    }
  },
  parse: parseCSV,
}
