import { json } from 'src/layers/json'
import { binary } from 'src/layers/binary'
import { hex } from 'src/layers/hex'
import { decimal } from 'src/layers/decimal'
import { base64 } from 'src/layers/base64'
import { url } from 'src/layers/url'
import { queryString } from 'src/layers/qs'
import { uri } from 'src/layers/uri'
import { jwt } from 'src/layers/jwt'
import { date } from 'src/layers/date'

export const allLayers = [
  binary,
  decimal,
  hex,
  base64,
  jwt,
  json,
  url,
  queryString,
  uri,
  date,
]
