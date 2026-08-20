export type CalendarCell = { num: number | null; disabled: boolean };

export const WEEKDAY_LABELS = ["S", "M", "T", "W", "T", "F", "S"];

export function buildCalendarMonth(year: number, month: number) {
  const firstWeekday = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells: CalendarCell[] = [];
  for (let i = 0; i < firstWeekday; i++)
    cells.push({ num: null, disabled: true });
  for (let d = 1; d <= daysInMonth; d++)
    cells.push({ num: d, disabled: false });
  while (cells.length % 7 !== 0) cells.push({ num: null, disabled: true });

  const monthLabel = new Date(year, month, 1).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return { cells, monthLabel };
}
