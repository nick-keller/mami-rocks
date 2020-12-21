import { Output } from 'src/output/types'
import { json } from 'src/output/json'
import { undef } from 'src/output/undef'
import { string } from 'src/output/string'
import { boolean } from 'src/output/boolean'
import { number } from 'src/output/number'
import { date } from 'src/output/date'
import { objectTable } from 'src/output/objectTable'
import { arrayTable } from 'src/output/arrayTable'

export const allOutputs: Output<any>[] = [
  arrayTable,
  objectTable,
  json,
  undef,
  string,
  boolean,
  number,
  date
]
