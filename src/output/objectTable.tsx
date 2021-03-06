import { Output } from 'src/output/types'
import { getType } from 'src/utils'
import { Print } from 'src/Print'
import { TypeSymbol } from 'src/TypeSymbol'

export const objectTable: Output<any> = {
  name: 'Table',
  acceptsValue: (value) => getType(value) === 'object' && Object.keys(value as object).length > 0,
  render: (value) => (
    <table>
      <colgroup>
        <col style={{width: '100px'}} />
        <col style={{width: 'fit-content'}} />
        <col />
      </colgroup>
      <tbody>
        {Object.entries(value).map(([key, value]) => (
          <tr>
            <th>{key}</th>
            <td style={{ lineBreak: 'auto' }}><TypeSymbol value={value} /></td>
            <td><Print value={value} /></td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
