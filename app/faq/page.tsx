"use client";

import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const FAQS = [
  {
    q: "Do I need a referral to book an appointment?",
    a: "No referral is required. You can book a consultation directly, though a referral from your GP or ophthalmologist is welcome if you have one.",
  },
  {
    q: "Do you see children as well as adults?",
    a: "Yes. Paediatric assessments for squint, amblyopia and eye movement conditions are a core part of the practice, alongside adult consultations.",
  },
  {
    q: "How long does an initial consultation take?",
    a: "An initial assessment runs for 45 minutes, allowing time for a full history, testing and a discussion of next steps.",
  },
  {
    q: "What should I bring to my appointment?",
    a: "Please bring any current glasses or contact lenses, a list of medications, and any relevant referral letters or previous test results.",
  },
];

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      <Navbar />

      <div className="px-6 py-10 md:px-14 md:py-16 max-w-3xl mx-auto">
        <p className="text-xs font-semibold tracking-wide text-terracotta mb-2 text-center">
          FAQ
        </p>
        <h1 className="font-display text-2xl md:text-4xl font-bold mb-8 md:mb-11 text-center">
          Frequently asked questions
        </h1>

        <div className="flex flex-col gap-3">
          {FAQS.map((faq, i) => (
            <div
              key={faq.q}
              className="rounded-2xl border border-border bg-white p-5"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between text-left"
              >
                <span className="text-sm font-semibold pr-4">{faq.q}</span>
                <span className="text-accent text-lg">
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>

              {openIndex === i && (
                <p className="text-sm text-muted mt-3">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
