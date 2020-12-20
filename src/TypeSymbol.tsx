import { getType, typeToAbbr } from 'src/utils'

export const TypeSymbol = ({ value }: { value: unknown }) => {
  const type = getType(value)

  return (
    <span className={"tag " + type} title={type}>
      {typeToAbbr[type]}
    </span>
  )
}
