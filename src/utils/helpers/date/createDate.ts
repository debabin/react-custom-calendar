import { getWeekNumber } from './getWeekNumber';

interface CreateDateParams {
  date?: Date;
  locale?: string;
}

export const createDate = (params?: CreateDateParams) => {
  const locale = params?.locale ?? 'default';

  const d = params?.date ?? new Date();
  const dayNumber = d.getDate();
  const day = d.toLocaleString(locale, { weekday: 'long' });
  const dayNumberInWeek = d.getDay() + 1;
  const dayShort = d.toLocaleString(locale, { weekday: 'short' });
  const year = d.getFullYear();
  const yearShort = d.toLocaleString(locale, { year: '2-digit' });
  const month = d.toLocaleString(locale, { month: 'long' });
  const monthShort = d.toLocaleString(locale, { month: 'short' });
  const monthNumber = d.getMonth() + 1;
  const monthIndex = d.getMonth();
  const timestamp = d.getTime();
  const week = getWeekNumber(d);

  return {
    date: d,
    dayNumber,
    day,
    dayNumberInWeek,
    dayShort,
    year,
    yearShort,
    month,
    monthShort,
    monthNumber,
    monthIndex,
    timestamp,
    week
  };
};
