import { createDate } from './createDate';
import { getMonthNumberOfDays } from './getMonthNumberOfDays';

interface CreateMonthParams {
  date?: Date;
  locale?: string;
}

export const createMonth = (params?: CreateMonthParams) => {
  const date = params?.date;
  const locale = params?.locale ?? 'default';

  const d = createDate({ date: date ?? new Date(), locale });
  const { month: monthName, year, monthNumber, monthIndex } = d;

  const getDay = (dayNumber: number) =>
    createDate({ date: new Date(year, monthIndex, dayNumber), locale });

  const createMonthDays = () => {
    const days = [];

    for (let i = 0; i <= getMonthNumberOfDays(monthNumber, year) - 1; i += 1) {
      days[i] = getDay(i + 1);
    }

    return days;
  };

  return {
    getDay,
    monthName,
    monthIndex,
    year,
    monthNumber,
    createMonthDays
  };
};
