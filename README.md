# try_catch

`try/catch` as a function.

The lame way:

```js
var x
try {
  x = thisMightThrow()
} catch (err) {
  x = somethingElse()
}
```

With `try_catch`:

```js
const tryCatch = require('try_catch')

const x = tryCatch(thisMightThrow, somethingElse)
```

## install

```sh
npm install try_catch
```

## API

### tryCatch(tryFn, catchFn)

- `tryFn: function`
- `catchFn: function`
- **returns**: the value returned by `tryFn()` unless `tryFn()` throws, in which case it will be the value returned by `catchFn()`.
