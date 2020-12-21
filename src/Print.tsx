import { getType } from 'src/utils'
import ReactJson from 'react-json-view'

const numberFormat = new Intl.NumberFormat('en-US', { maximumFractionDigits: 10 })

export const Print = ({ value }: { value: any }) => {
  const type = getType(value)

  if (type === 'string') {
    return value
  }

  if (type === 'number') {
    return numberFormat.format(value)
  }

  if (type === 'null') {
    return <code>null</code>
  }

  if (type === 'undefined') {
    return <code>undefined</code>
  }

  if (type === 'NaN') {
    return <code>NaN</code>
  }

  if (type === 'boolean') {
    return <code>{value ? 'true' : 'false'}</code>
  }

  if (type === 'object' || type === 'array') {
    return (
      <ReactJson
        src={value as object}
        theme='chalk'
        style={{ background: 'transparent' }}
      />
    )
  }

  return <code>-</code>
}
