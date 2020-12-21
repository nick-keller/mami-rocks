import { useEffect, useState } from 'react'
import { allOutputs } from 'src/output/all'
import { Output as OutputType } from 'src/output/types'

export const Output = ({ value }: { value: unknown }) => {
  const [outputs, setOutputs] = useState<OutputType<any>[]>([])
  const [currentOutput, setCurrentOutput] = useState<number>(0)

  useEffect(() => {
    setOutputs(allOutputs.filter(output => output.acceptsValue(value)))
  }, [value])

  useEffect(() => {
    setCurrentOutput(0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [outputs.map(({ name }) => name).join(',')])

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
      {outputs.length > 1 && <nav className="tabs">
        {outputs.map((output, i) => (
          <div key={i} onClick={() => setCurrentOutput(i)} className={i === currentOutput ? 'active' : ''}>
            {output.name}
          </div>
        ))}
      </nav>}
      {rendered}
    </>
  )
}
