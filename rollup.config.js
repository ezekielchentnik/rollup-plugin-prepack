const fs = require('fs')
const buble = require('rollup-plugin-buble')
const pkg = JSON.parse(fs.readFileSync('./package.json'))

module.exports = {
  entry: 'src/index.js',
  external: Object.keys(pkg['dependencies']),
  plugins: [
    buble()
  ],
  targets: [
    {
      sourceMap: true,
      format: 'es',
      dest: pkg['jsnext:main']
    },
    {
      sourceMap: true,
      format: 'cjs',
      dest: pkg['main']
    }
  ]
}
