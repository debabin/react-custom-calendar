import { createDate } from './createDate';
import { createMonth } from './createMonth';

type MonthNumber = number;
interface CreateYearParams {
  year?: number;
  monthNumber?: MonthNumber;
  locale?: string;
}

export const createYear = (params?: CreateYearParams) => {
  const year = params?.year ?? null;
  const monthNumber = params?.monthNumber ?? null;
  const locale = params?.locale ?? 'default';

  const monthCount = 12;
  const today = createDate();

  const month = createMonth({
    date: new Date(year ?? today.year, monthNumber ? monthNumber - 1 : today.monthNumber - 1),
    locale
  });

  const getMonth = (monthNumber: number) =>
    createMonth({ date: new Date(year ?? today.year, monthNumber), locale }).createMonthDays();

  const createYearMonthes = () => {
    const monthes = [];

    for (let i = 0; i <= monthCount - 1; i += 1) {
      monthes[i] = getMonth(i);
    }

    return monthes;
  };

  return { createYearMonthes, year: year ?? today.year, month };
};
