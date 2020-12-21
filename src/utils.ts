export const getType = (value: unknown) => {
  if (value === null) {
    return 'null'
  }

  if (value === undefined) {
    return 'undefined'
  }

  if (typeof value === 'string') {
    return 'string'
  }

  if (typeof value === 'boolean') {
    return 'boolean'
  }

  if (typeof value === 'number' && isNaN(value as number)) {
    return 'NaN'
  }

  if (typeof value === 'number') {
    return 'number'
  }

  if (value instanceof Date) {
    return 'date'
  }

  if (Array.isArray(value)) {
    return 'array'
  }

  if (typeof value === 'object') {
    return 'object'
  }

  return 'unknown'
}

export const typeToAbbr = {
  null: 'null',
  undefined: 'undef',
  NaN: 'NaN',
  string: 'str',
  number: 'num',
  boolean: 'bool',
  array: 'arr',
  object: 'obj',
  date: 'date',
  unknown: '?',
}
