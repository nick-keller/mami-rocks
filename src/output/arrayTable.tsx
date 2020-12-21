import { Output } from 'src/output/types'
import { Print } from 'src/Print'

export const arrayTable: Output<Record<string, unknown>[]> = {
  name: 'Table',
  acceptsValue: (value) => Array.isArray(value) && value.every((row) => typeof row === 'object') && value.some((row) => Object.keys(row).length),
  render: (value) => {
    const columns = new Set<string>()

    value.forEach((row) => {
      Object.keys(row).forEach((key) => columns.add(key))
    })

    return (
      <table>
        <thead>
          <tr>
            {[...columns].map(key => <th key={key}>{key}</th>)}
          </tr>
        </thead>
        <tbody>
        {value.map((row) => (
          <tr>
            {[...columns].map(key => <td key={key}><Print value={row[key]}/></td>)}
          </tr>
        ))}
        </tbody>
      </table>
    )
  }
}
