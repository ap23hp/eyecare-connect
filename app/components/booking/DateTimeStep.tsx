import { buildCalendarMonth, WEEKDAY_LABELS } from "../../lib/calendar";
import { BOOKING_TIMES } from "../../lib/services-data";

type Props = {
  selectedDay: number | null;
  selectedTime: string | null;
  onSelectDay: (day: number) => void;
  onSelectTime: (time: string) => void;
  onContinue: () => void;
};

export default function DateTimeStep({
  selectedDay,
  selectedTime,
  onSelectDay,
  onSelectTime,
  onContinue,
}: Props) {
  const { cells, monthLabel } = buildCalendarMonth(2026, 7);

  return (
    <div>
      <div className="text-base font-semibold mb-1">Choose a date and time</div>
      <div className="text-xs text-muted mb-5">{monthLabel}</div>

      <div className="grid grid-cols-7 gap-1.5 mb-2">
        {WEEKDAY_LABELS.map((w, i) => (
          <div
            key={`${w}-${i}`}
            className="text-center text-[11px] font-semibold text-muted py-1"
          >
            {w}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1.5 mb-7">
        {cells.map((cell, i) => {
          if (cell.num === null) return <div key={i} />;

          const isSelected = cell.num === selectedDay;

          return (
            <button
              key={i}
              type="button"
              onClick={() => onSelectDay(cell.num!)}
              className={`py-2 text-center rounded-lg text-xs font-semibold ${
                isSelected ? "bg-accent text-cream" : "hover:bg-accent-soft"
              }`}
            >
              {cell.num}
            </button>
          );
        })}
      </div>

      <div className="text-sm font-semibold mb-3">Available times</div>
      <div className="grid grid-cols-2 gap-2.5 mb-8">
        {BOOKING_TIMES.map((t) => {
          const isSelected = t === selectedTime;

          return (
            <button
              key={t}
              type="button"
              onClick={() => onSelectTime(t)}
              className={`py-3 text-center rounded-xl text-xs font-semibold ${
                isSelected
                  ? "bg-accent text-cream"
                  : "bg-white border border-border hover:border-accent/50"
              }`}
            >
              {t}
            </button>
          );
        })}
      </div>

      <button
        type="button"
        disabled={!selectedTime}
        onClick={onContinue}
        className={`rounded-xl px-8 py-3.5 text-sm font-semibold ${
          selectedTime
            ? "bg-accent text-cream"
            : "bg-muted/30 text-text/40 cursor-not-allowed"
        }`}
      >
        Continue
      </button>
    </div>
  );
}
