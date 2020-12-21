import { Layer } from 'src/layers/types'
import parse from 'url-parse'
import qs from 'qs'

export const url: Layer<string, object> = {
  name: 'URL parse',
  acceptsInput: (value) => {
    if (typeof value !== 'string') {
      return false
    }

    return /^[a-z]+:\/\//i.test(value)
  },
  parse: (value) => {
    const parsed = parse(value)

    return Object.entries({
      ...parsed,
      queryParams: parsed.query && qs.parse(parsed.query.slice(1)),
      port: parsed.port ? parseInt(parsed.port) : null,
      pathname: parsed.pathname === '/' ? null : parsed.pathname,
      hostname: parsed.hostname !== parsed.host ? parsed.hostname : null,
      slashes: null,
      href: null,
    }).filter(([_, v]) => v).reduce((acc, [k, v]) => {
      acc[k] = v
      return acc
    }, {} as Record<string, unknown>)
  },
}
