import { Output } from 'src/output/types'

export const undef: Output<any> = {
  name: 'Undef',
  acceptsValue: (value) => value === undefined,
  render: (value) => <div className='big-output'>No output</div>
}
