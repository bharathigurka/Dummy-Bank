import { NumberFormatPipe } from './symbol.pipe';

describe('NumberFormatPipe', () => {
  let pipe: NumberFormatPipe;
  beforeEach(() => {
    pipe = new NumberFormatPipe();
  });
  it('transforms "abc" to "Abc"', () => {
    expect(pipe.transform(11)).toEqual(-11);
  });
});
