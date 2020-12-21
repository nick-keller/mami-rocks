import { Output } from 'src/output/types'

export const boolean: Output<any> = {
  name: 'Boolean',
  acceptsValue: (value) => typeof value === 'boolean',
  render: (value) => <div className='big-output'>{value ? 'True' : 'False'}</div>
}
