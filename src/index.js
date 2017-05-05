import { prepack } from 'prepack'

export default (options = {}) => {
  return {
    name: 'prepack',
    transformBundle (code) {
      return prepack(code, options)
    }
  }
}
