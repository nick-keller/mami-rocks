export type Layer<F, T> = {
  name: string
  acceptsInput: (value: unknown) => boolean
  parse: (value: F) => T
}
