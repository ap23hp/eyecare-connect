type Props = {
  typeName: string;
  time: string | null;
  name: string;
  email: string;
  onConfirm: () => void;
};

export default function BookingConfirmStep({
  typeName,
  time,
  name,
  email,
  onConfirm,
}: Props) {
  const rows = [
    { label: "Type", value: typeName },
    { label: "Time", value: time ?? "" },
    { label: "Name", value: name },
    { label: "Email", value: email },
  ];

  return (
    <div>
      <div className="text-base font-semibold mb-4">Review and confirm</div>

      <div className="rounded-2xl border border-border bg-white p-6 mb-7 flex flex-col gap-3.5">
        {rows.map((row) => (
          <div key={row.label} className="flex justify-between text-sm">
            <span className="text-muted">{row.label}</span>
            <span className="font-semibold">{row.value}</span>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={onConfirm}
        className="rounded-xl bg-accent px-8 py-3.5 text-sm font-semibold text-cream"
      >
        Confirm appointment
      </button>
    </div>
  );
}
