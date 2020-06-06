import { logger } from "./logger";
import { LOG_LEVEL } from "./enum";
jest.mock('fs');

const cases = [
  LOG_LEVEL.FATAL,
  LOG_LEVEL.ERROR,
  LOG_LEVEL.WARN,
  LOG_LEVEL.INFO,
  LOG_LEVEL.DEBUG,
  LOG_LEVEL.TRACE,
]
describe('local test', () => {
  it('ALL_CASE', () => {
    cases.forEach(level => {
      const log = logger(level, 'SAMPLE_NAME', 'SAMPLE_TARGET', 'HOGE_TEXT');
      expect(log).toMatchSnapshot();
    });
  });

  it('OUTPUT_TEST', () => {
    cases.forEach(level => {
      const log = logger(level, 'SAMPLE_NAME', 'SAMPLE_TARGET', 'HOGE_TEXT', true);
      expect(log).toMatchSnapshot();
    });
  });
});