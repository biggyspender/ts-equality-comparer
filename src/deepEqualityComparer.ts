import { getHashCode } from 'ts-gethashcode'
import { deepEqual } from 'ts-deep-equal'
import { EqualityComparer } from './EqualityComparer'
/* istanbul ignore next */
export const deepEqualityComparer: EqualityComparer<any> = {
  equals: deepEqual,
  getHashCode
}
