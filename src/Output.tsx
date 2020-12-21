import { useEffect, useState } from 'react'
import { allOutputs } from 'src/output/all'
import { Output as OutputType } from 'src/output/types'

export const Output = ({ value }: { value: unknown }) => {
  const [outputs, setOutputs] = useState<OutputType<any>[]>([])
  const [currentOutput, setCurrentOutputs] = useState<number>(0)

  useEffect(() => {
    setOutputs(allOutputs.filter(output => output.acceptsValue(value)))
  }, [value])

  if (!outputs[currentOutput]) {
    return <div className='big-output'>Unknown</div>
  }

  let rendered

  try {
    rendered = outputs[currentOutput].render(value)
  } catch (error) {
    rendered = null
  }

  return (
    <>
      {rendered}
    </>
  )
}
