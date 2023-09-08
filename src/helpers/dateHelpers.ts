import { DateTime } from 'luxon';

interface Props {
  start?: DateTime;
  end?: DateTime;
  format?: string;
}

export function getRandomDate({
  start = DateTime.now().minus({ months: 6 }),
  end = DateTime.now(),
}: Props = {}) {
  return DateTime.fromMillis(
    start.toMillis() + Math.random() * (end.toMillis() - start.toMillis()),
  );
}

export function formatDate(date: DateTime, format = 'LLL dd, yyyy') {
  return date.toFormat(format);
}
