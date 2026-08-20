"use client";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { useBookingForm } from "../hooks/useBookingForm";
import { BOOKING_SERVICES } from "../lib/services-data";
import BookingProgress from "../components/booking/BookingProgress";
import AppointmentTypeStep from "../components/booking/AppointmentTypeStep";
import DateTimeStep from "../components/booking/DateTimeStep";
import ContactDetailsStep from "../components/booking/ContactDetailsStep";
import BookingConfirmStep from "../components/booking/BookingConfirmStep";
import BookingSuccessStep from "../components/booking/BookingSuccessStep";

export default function BookPage() {
  const { state, dispatch } = useBookingForm();

  const selectedService = BOOKING_SERVICES.find((s) => s.id === state.typeId);
  const typeName = selectedService?.name ?? "Initial assessment";

  async function handleConfirm() {
    try {
      await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          typeName,
          time: state.time,
          name: state.name,
          email: state.email,
        }),
      });
    } catch (error) {
      console.error(error);
    }

    dispatch({ type: "CONFIRM" });
  }

  return (
    <div>
      <Navbar />

      <div className="px-6 py-10 md:px-14 md:py-16 max-w-5xl mx-auto">
        <div className="md:grid md:grid-cols-[240px_1fr] md:gap-16">
          <div>
            <h1 className="font-display text-xl font-bold mb-6">
              Book a consultation
            </h1>
            <BookingProgress step={state.step} />
          </div>

          <div className="max-w-lg">
            {state.step > 0 && state.step < 4 && (
              <button
                type="button"
                onClick={() => dispatch({ type: "BACK" })}
                className="text-sm font-semibold text-muted mb-5 hover:text-accent"
              >
                &larr; Back
              </button>
            )}

            {state.step === 0 && (
              <>
                <p className="text-xs text-muted mb-4 bg-accent-soft rounded-lg px-3 py-2">
                  Note: this environment sends live emails to a fixed test
                  address. In production, a verified sending domain would route
                  messages to any recipient.
                </p>
                <AppointmentTypeStep
                  selectedId={state.typeId}
                  onSelect={(id) => dispatch({ type: "SELECT_TYPE", id })}
                />
              </>
            )}

            {state.step === 1 && (
              <DateTimeStep
                selectedDay={state.day}
                selectedTime={state.time}
                onSelectDay={(day) => dispatch({ type: "SELECT_DAY", day })}
                onSelectTime={(time) => dispatch({ type: "SELECT_TIME", time })}
                onContinue={() => dispatch({ type: "GO_TO_DETAILS" })}
              />
            )}

            {state.step === 2 && (
              <ContactDetailsStep
                name={state.name}
                email={state.email}
                onNameChange={(value) => dispatch({ type: "SET_NAME", value })}
                onEmailChange={(value) =>
                  dispatch({ type: "SET_EMAIL", value })
                }
                onContinue={() => dispatch({ type: "GO_TO_REVIEW" })}
              />
            )}

            {state.step === 3 && (
              <BookingConfirmStep
                typeName={typeName}
                time={state.time}
                name={state.name}
                email={state.email}
                onConfirm={handleConfirm}
              />
            )}

            {state.step === 4 && (
              <BookingSuccessStep
                typeName={typeName}
                time={state.time}
                email={state.email}
              />
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
