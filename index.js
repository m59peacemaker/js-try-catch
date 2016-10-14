function tryCatch (tryFn, catchFn) {
  try {
    return tryFn()
  } catch(err) {
    if (typeof catchFn !== 'function') {
      throw err
    }
    return catchFn(err)
  }
}

module.exports = tryCatch
