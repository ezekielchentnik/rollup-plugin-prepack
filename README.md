# rollup-plugin-prepack

[![NPM](https://img.shields.io/npm/v/rollup-plugin-prepack.svg)](https://www.npmjs.com/package/rollup-plugin-prepack)
[![Travis](https://travis-ci.org/ezekielchentnik/rollup-plugin-prepack.svg?branch=master)](https://travis-ci.org/ezekielchentnik/rollup-plugin-prepack)

Run your [Rollup](https://github.com/rollup/rollup) bundles through [prepack](https://prepack.io/).

See [prepack](https://prepack.io/) for more info and details on when it makes sense for this optimization.

---

## Usage

Install

```bash
npm i rollup-plugin-prepack --save-dev
```

Use plugin in your `rollup.config.js`

```js
const buble = require('rollup-plugin-buble')
const prepack = require('rollup-plugin-prepack').default // reference .default for commonjs

const options = {} // prepack options, see prepack docs

module.exports = {
  entry: 'src/index.js',
  plugins: [
    buble({ jsx: 'h' }),
    prepack(options)
  ],
  // ...
}
```

### Configuration

|Name|Description|Default|
|---|---|---|
|`prepack`|Prepack configuration. See [Prepack documentation](https://prepack.io/getting-started.html#options).|


### Examples

- [preact-pwa](https://github.com/ezekielchentnik/preact-pwa)


### License

[MIT]

[MIT]: http://choosealicense.com/licenses/mit/
