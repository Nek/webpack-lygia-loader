# lygia-loader

A webpack loader for the [Lygia](https://lygia.xyz/) shader library that resolves includes at build time.

## Installation

```bash
npm install webpack-lygia-loader
```

## Usage

Add to your webpack configuration:

```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.(glsl|vs|fs|vert|frag)$/,
        exclude: /node_modules/,
        use: [
          'raw-loader',
          'webpack-lygia-loader'
        ]
      }
    ]
  }
}
```

Then in your shaders you can include Lygia modules:

```glsl
#include "lygia/math/const.glsl"
#include "lygia/space/ratio.glsl"
```

## Features

- Resolves Lygia includes at build time
- Caches downloaded files
- Supports local file includes
- Works with Next.js and other webpack-based bundlers

## License

MIT
