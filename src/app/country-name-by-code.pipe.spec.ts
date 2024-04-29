import { CountryNameByCodePipe } from './country-name-by-code.pipe';

describe('CountryNameByCodePipe', () => {
  it('create an instance', () => {
    const pipe = new CountryNameByCodePipe();
    expect(pipe).toBeTruthy();
  });
});
