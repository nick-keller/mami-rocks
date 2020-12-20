import { getType } from 'src/utils'
import nl2br from 'react-newline-to-break'
import ReactJson from 'react-json-view'

const numberFormat = new Intl.NumberFormat('en-US')

export const Output = ({ value }: { value: unknown }) => {
  const type = getType(value)

  if (type === 'string') {
    return (
      <div className='string-output'>{nl2br(value as string)}</div>
    )
  }

  if (type === 'undefined') {
    return (
      <div className='big-output'>No output</div>
    )
  }

  if (type === 'boolean') {
    return (
      <div className='big-output'>{value ? 'True' : 'False'}</div>
    )
  }

  if (type === 'object' || type === 'array') {
    return (
      <ReactJson
        src={value as object}
        theme='chalk'
        style={{ background: '#0E1218' }}
      />
    )
  }

  if (type === 'number') {
    if (Number.isInteger(value)) {
      return (
        <>
          <div>Decimal</div>
          <div className='big-output'>{numberFormat.format(value as number)}</div>
          <div>Hex</div>
          <div className='big-output'>0x{(value as number).toString(16).toUpperCase()}</div>
          <div>Binary</div>
          <div className='big-output'>{(value as number).toString(2)}</div>
        </>
      )
    }
  }

  return <div className='string-output'>Unknown</div>
}
