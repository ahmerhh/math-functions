# Math utils

Set of simple math utilities.

## Installation

```sh
$ npm install --save math-functions
```

## Usage

```js
// import a specific function
import { random } from 'math-functions';

// or everything at once
import * as mathUtils from 'math-functions';

const value = random(0, 50, true);
const mapped = mathUtils.map(24, 0, 100, 0, 1);
```

## API

#### `val = random(min, max, round)`

(alias of `getRandomValueInRange`)

Get a random value in the given [`min`, `max`] range.
`round` is `false` by default.

#### `val = map(val, inMin, inMax, outMin, outMax)`

(alias of `mapValueToRange`)

Map `val` from range [`inMin`, `inMax`] to [`outMin`, `outMax`] range.

#### `val = isPOT(val)`

(alias of `isPowerOfTwo`)

Returns `true` if `val` is a [power of two](https://en.wikipedia.org/wiki/Power_of_two), `false` otherwise.

## License

MIT, see [LICENSE.md](https://github.com/ahmerhh/math-functions/blob/master/LICENSE.md) for more details.
