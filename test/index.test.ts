import Encoding from '../src/Encoding';

describe('encoding', () => {
  test('test constructor', () => {
    const encoding = new Encoding('Hello');
    expect(encoding.value).toBe('Hello');
  });
});