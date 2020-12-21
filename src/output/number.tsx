import { Output } from 'src/output/types'

const numberFormat = new Intl.NumberFormat('en-US', { maximumFractionDigits: 10 })

export const number: Output<any> = {
  name: 'Number',
  acceptsValue: (value) => typeof value === 'number' && !isNaN(value),
  render: (value) => {
    if (Number.isInteger(value) && value as number >= 0) {
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
    } else {
      return <div className='big-output'>{numberFormat.format(value as number)}</div>
    }
  }
}
