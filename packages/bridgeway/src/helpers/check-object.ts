import warn from '../utils/warn'
import { isNull, isObject, isUndefined } from '../utils/type-checks'

export default function checkObject(
  obj: object,
  requiredProperties: string[] = []
): string[] {
  if (isNull(obj) || isUndefined(obj)) {
    return requiredProperties
  }
  if (!isObject(obj)) {
    warn('"obj" is invalid or does not exist.')
  }
  const missingProps = requiredProperties.filter((prop) => !(prop in obj))
  if (requiredProperties.length > 0) {
    return missingProps
  }
  return []
}
