"use client";

import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <Navbar />

      <div className="px-6 py-10 md:px-14 md:py-16 max-w-7xl mx-auto">
        <div className="md:grid md:grid-cols-2 md:gap-16">
          <div>
            <p className="text-xs font-semibold tracking-wide text-terracotta mb-2">
              CONTACT
            </p>
            <h1 className="font-display text-2xl md:text-4xl font-bold mb-4">
              Get in touch
            </h1>
            <p className="text-base text-text/85 mb-8 md:max-w-md">
              Have a question before booking? Send a message and the clinic will
              get back to you within one business day.
            </p>

            <div className="flex flex-col gap-4">
              <div>
                <div className="text-xs text-muted">Phone</div>
                <div className="text-sm font-semibold">(02) 5140 4032</div>
              </div>
              <div>
                <div className="text-xs text-muted">Email</div>
                <div className="text-sm font-semibold">
                  hello@eyecareconnect.com
                </div>
              </div>
              <div>
                <div className="text-xs text-muted">Clinic hours</div>
                <div className="text-sm font-semibold">
                  Monday–Friday, 9am–5pm
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 md:mt-0 rounded-2xl border border-border bg-white p-6">
            {submitted ? (
              <div className="text-center py-6">
                <div className="text-base font-semibold mb-2">Message sent</div>
                <div className="text-sm text-muted">
                  Thanks, {form.name.split(" ")[0] || "there"} — the clinic will
                  get back to you within one business day.
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-4 mb-5">
                  <div>
                    <label className="block text-xs font-semibold text-muted mb-1.5">
                      Full name
                    </label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      placeholder="Jordan Lee"
                      className="w-full rounded-xl border border-border bg-cream px-3.5 py-3 text-sm outline-none focus:border-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-muted mb-1.5">
                      Email
                    </label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      placeholder="jordan@email.com"
                      className="w-full rounded-xl border border-border bg-cream px-3.5 py-3 text-sm outline-none focus:border-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-muted mb-1.5">
                      Message
                    </label>
                    <textarea
                      required
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      placeholder="How can we help?"
                      rows={4}
                      className="w-full resize-none rounded-xl border border-border bg-cream px-3.5 py-3 text-sm outline-none focus:border-accent"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-accent py-3.5 text-sm font-semibold text-cream"
                >
                  Send message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
