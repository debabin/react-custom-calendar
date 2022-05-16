export const getMonthNumberOfDays = (
  monthNumber: number,
  yearNumber: number = new Date().getFullYear()
) => new Date(yearNumber, monthNumber, 0).getDate();
