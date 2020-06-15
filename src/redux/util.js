import { createSelector } from 'reselect';

export const getAverage = (arr) =>
  arr.reduce((acc, rating) => acc + rating) / arr.length;
export const mapToArray = (selector) => createSelector(selector, Object.values);
