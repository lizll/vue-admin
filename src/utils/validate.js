/**
 * check whether it is an external resource
 */

export function isExternal (path) {
  return /^(https?:|mailto|tel:)/.test(path)
}
