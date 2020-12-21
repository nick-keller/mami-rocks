import { Output } from 'src/output/types'
import nl2br from 'react-newline-to-break'

export const string: Output<any> = {
  name: 'String',
  acceptsValue: (value) => typeof value === 'string',
  render: (value) => <div className='string-output'>{nl2br(value as string)}</div>
}
