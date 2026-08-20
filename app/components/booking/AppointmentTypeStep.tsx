import {
  BOOKING_SERVICES,
  type BookingServiceId,
} from "../../lib/services-data";

type Props = {
  selectedId: string | null;
  onSelect: (id: BookingServiceId) => void;
};

export default function AppointmentTypeStep({ selectedId, onSelect }: Props) {
  return (
    <div>
      <div className="text-base font-semibold mb-4">
        Select a consultation type
      </div>

      <div className="flex flex-col gap-2.5">
        {BOOKING_SERVICES.map((svc) => {
          const isSelected = svc.id === selectedId;

          return (
            <button
              key={svc.id}
              type="button"
              onClick={() => onSelect(svc.id)}
              className={`w-full text-left rounded-2xl px-4 py-3.5 transition-colors ${
                isSelected
                  ? "border-[1.5px] border-accent bg-accent-soft"
                  : "border border-border bg-white hover:border-accent/50"
              }`}
            >
              <div className="text-sm font-semibold">{svc.name}</div>
              <div className="text-xs text-muted mt-0.5">{svc.desc}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
