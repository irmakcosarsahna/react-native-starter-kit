import { mergeStyle } from './index';

const isTrue = true;
const isFalse = false;

test('Merge style test empty object', () => {
  expect(mergeStyle(1, 2)).toEqual({});
});

test('Merge style test single true object', () => {
  expect(mergeStyle(isTrue && { test: 1 })).toEqual({ test: 1 });
});

test('Merge style test mutliple veriable test', () => {
  expect(mergeStyle(isTrue && { test: 1 }, isFalse && { test: 2 }, {}, 'ırmak')).toEqual({ test: 1 });
});
