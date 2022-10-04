import getBuffer from '../src/getBuffer';
import ArrayBufferConverter from '../src/ArrayBufferConverter';

test('class methods should work correctly', () => {
  const converter = new ArrayBufferConverter();
  converter.load(getBuffer());
  expect(converter.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
