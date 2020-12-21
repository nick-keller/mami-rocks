import { Output } from 'src/output/types'
import ReactJson from 'react-json-view'
import { getType } from 'src/utils'

export const json: Output<any> = {
  name: 'JSON',
  acceptsValue: (value) => {
    const type = getType(value)
    return type === 'object' || type === 'array'
  },
  render: (value) => (
    <ReactJson
      src={value as object}
      theme='chalk'
      style={{ background: '#0E1218' }}
    />
  )
}
