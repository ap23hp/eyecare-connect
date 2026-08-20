const STEP_LABELS = ["Type", "Date & time", "Details", "Confirm"];

export default function BookingProgress({ step }: { step: number }) {
  return (
    <div className="flex flex-col">
      {STEP_LABELS.map((label, i) => {
        const isDone = i <= step;

        return (
          <div key={label} className="flex items-start gap-3.5 pb-7">
            <div
              className={`w-6 h-6 rounded-full shrink-0 flex items-center justify-center text-xs font-bold ${
                isDone ? "bg-accent text-cream" : "bg-muted/20 text-muted"
              }`}
            >
              {i + 1}
            </div>
            <div className="pt-0.5">
              <div
                className={`text-sm font-semibold ${isDone ? "text-accent" : "text-muted"}`}
              >
                {label}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
