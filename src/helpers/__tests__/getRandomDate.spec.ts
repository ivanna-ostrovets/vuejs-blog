import { DateTime } from 'luxon';
import { describe, expect, it } from 'vitest';

import { getRandomDate } from '../dateHelpers';

describe('getRandomDate', () => {
  it('gives date in last 6 months with default parameters', () => {
    const randomDate = getRandomDate();
    const end = DateTime.now();
    const start = end.minus({ months: 6 });

    expect(randomDate.toMillis()).toBeGreaterThan(start.toMillis());
    expect(randomDate.toMillis()).toBeLessThan(end.toMillis());
  });

  it('considers passed start parameter', () => {
    const end = DateTime.now();
    const start = end.minus({ days: 10 });
    const randomDate = getRandomDate({ start });

    expect(randomDate.toMillis()).toBeGreaterThan(start.toMillis());
    expect(randomDate.toMillis()).toBeLessThan(end.toMillis());
  });

  it('considers passed end parameter', () => {
    const end = DateTime.now().minus({ days: 10 });
    const start = end.minus({ months: 6 });
    const randomDate = getRandomDate({ end });

    expect(randomDate.toMillis()).toBeGreaterThan(start.toMillis());
    expect(randomDate.toMillis()).toBeLessThan(end.toMillis());
  });
});
