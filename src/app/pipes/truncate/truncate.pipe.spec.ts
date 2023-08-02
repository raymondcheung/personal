import { TruncatePipe } from './truncate.pipe';

let mockSanitizer = {};

describe('TruncatePipe', () => {
  it('create an instance', () => {
    const pipe = new TruncatePipe(mockSanitizer);
    expect(pipe).toBeTruthy();
  });
});
