export type Output<T> = {
  name: string,
  acceptsValue: (value: unknown) => boolean
  render: (value: T) => any
}
