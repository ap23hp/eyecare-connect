type Props = {
  name: string;
  email: string;
  onNameChange: (value: string) => void;
  onEmailChange: (value: string) => void;
  onContinue: () => void;
};

export default function ContactDetailsStep({
  name,
  email,
  onNameChange,
  onEmailChange,
  onContinue,
}: Props) {
  const canContinue = name.trim() !== "" && email.trim() !== "";

  return (
    <div>
      <div className="text-base font-semibold mb-4">Your details</div>

      <div className="flex flex-col gap-4 mb-7">
        <div>
          <label className="block text-xs font-semibold text-muted mb-1.5">
            Full name
          </label>
          <input
            value={name}
            onChange={(e) => onNameChange(e.target.value)}
            placeholder="Jordan Lee"
            className="w-full rounded-xl border border-border bg-white px-3.5 py-3 text-sm outline-none focus:border-accent"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-muted mb-1.5">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => onEmailChange(e.target.value)}
            placeholder="jordan@email.com"
            className="w-full rounded-xl border border-border bg-white px-3.5 py-3 text-sm outline-none focus:border-accent"
          />
        </div>
      </div>

      <button
        type="button"
        disabled={!canContinue}
        onClick={onContinue}
        className={`rounded-xl px-8 py-3.5 text-sm font-semibold ${
          canContinue
            ? "bg-accent text-cream"
            : "bg-muted/30 text-text/40 cursor-not-allowed"
        }`}
      >
        Continue
      </button>
    </div>
  );
}
