import React, { useEffect, useState } from 'react'
import { Layer } from 'src/layers/types'
import { TypeSymbol } from 'src/TypeSymbol'
import { Output } from 'src/Output'
import { allLayers } from 'src/layers/all'


function App() {
  const [layers, setLayers] = useState<Layer<any, any>[]>([])
  const [values, setValues] = useState<unknown[]>([])
  const [input, setInput] = useState<string>('')

  useEffect(() => {
    const newValues: unknown[] = []
    const newLayers: Layer<any, any>[] = []
    let lastValue: unknown = input
    let foundLayer = false
    let maxLayers = 10

    do {
      foundLayer = false

      for (const layer of allLayers) {
        if (layer.acceptsInput(lastValue)) {
          newLayers.push(layer)
          lastValue = layer.parse(lastValue as any)
          newValues.push(lastValue)
          foundLayer = true
          break
        }
      }
    } while (foundLayer && maxLayers--)

    setLayers(newLayers)
    setValues(newValues)
  }, [input])

  return (
    <>
      <main>
        <article>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </article>
        <article>
          <Output value={values[values.length - 1]} />
        </article>
      </main>
      <aside>
        <TypeSymbol value={input} />
        {layers.map(({ name }, i) => (
          <React.Fragment key={i}>
            <span className="tag">{name}</span>
            <TypeSymbol value={values[i]} />
          </React.Fragment>
        ))}
      </aside>
    </>
  );
}

export default App;
