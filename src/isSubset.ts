import entries from './entries';
import {isSubset as mapIsSubset} from 'extra-map';
import type {compareFn, mapFn, Lists} from './_types';

/**
 * Checks if lists has a subset.
 * @param x lists
 * @param y subset?
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 */
function isSubset<T, U, V=U>(x: Lists<T, U>, y: Lists<T, U>, fc: compareFn<U|V>=null, fm: mapFn<T, U, U|V>=null): boolean {
  return mapIsSubset(new Map(entries(x)), entries(y), fc, fm as any);
}
export default isSubset;
