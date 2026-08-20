type Props = {
  typeName: string;
  time: string | null;
  email: string;
};

export default function BookingSuccessStep({ typeName, time, email }: Props) {
  return (
    <div>
      <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mb-5">
        <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
          <path
            d="M2 7L7.5 12.5L18 1.5"
            stroke="#F6EEF2"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="font-display text-xl font-bold mb-2.5">
        Appointment requested
      </div>

      <div className="text-sm text-muted leading-relaxed">
        {typeName} at {time}. A confirmation will be sent to {email}.
      </div>
    </div>
  );
}
