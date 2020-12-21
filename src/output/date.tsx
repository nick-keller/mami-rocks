import { Output } from 'src/output/types'

// @ts-ignore
const dateFormatFull = new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'full' })
const dateFormatShort = new Intl.DateTimeFormat('en-US', {
  month: '2-digit',
  day: '2-digit',
  year: 'numeric',
  hour12: false,
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit'
})

export const date: Output<any> = {
  name: 'Date',
  acceptsValue: (value) => value instanceof Date,
  render: (value) => (
    <>
      <div>Full</div>
      <div className='big-output'>{dateFormatFull.format(value as Date)}</div>
      <div>Short</div>
      <div className='big-output'>{dateFormatShort.format(value as Date)}</div>
      <div>ISO</div>
      <div className='big-output'>{(value as Date).toISOString()}</div>
      <div>Timestamp</div>
      <div className='big-output'>{(value as Date).getTime() / 1000}</div>
    </>
  )
}
