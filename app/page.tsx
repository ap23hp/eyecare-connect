import Navbar from "./components/layout/Navbar";
import Image from "next/image";
import Footer from "./components/layout/Footer";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="px-6 py-10 md:px-14 md:py-16 max-w-7xl mx-auto">
        <div className="md:grid md:grid-cols-2 md:gap-12 md:items-center">
          <div>
            <p className="text-xs font-semibold tracking-wide text-terracotta mb-3">
              ORTHOPTIST · SYDNEY, AUSTRALIA
            </p>

            <h1 className="font-display text-3xl md:text-5xl font-bold leading-tight mb-4">
              Clear vision starts with the right care
            </h1>

            <p className="text-base text-text/85 mb-6 md:max-w-md">
              Specialist assessments for squint, double vision and eye movement
              conditions, in a calm and unhurried setting.
            </p>

            <Link
              href="/book"
              className="w-full md:w-auto md:px-8 rounded-xl bg-accent py-3.5 text-sm font-semibold text-cream mb-3 md:mb-0 inline-block text-center"
            >
              Book a consultation
            </Link>
          </div>

          <div className="mb-6 md:mb-0 md:order-last aspect-4/3 w-full rounded-2xl overflow-hidden">
            <Image
              src="/images/hero-photo.jpg"
              alt="Dr. Aria Whitfield, orthoptist"
              width={800}
              height={600}
              className="w-full h-full object-cover object-top"
              priority
            />
          </div>
        </div>
        <div className="mt-6">
          <p className="text-xs font-semibold tracking-wide text-terracotta mb-2">
            SERVICES
          </p>

          <h2 className="font-display text-2xl font-bold mb-6">
            What I assess and treat
          </h2>

          <div className="flex flex-col gap-4 md:grid md:grid-cols-3 md:gap-5">
            <div className="rounded-2xl border border-border bg-white p-5">
              <div className="text-base font-semibold mb-1">
                Squint and strabismus
              </div>
              <div className="text-sm text-muted">
                Assessment and management
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-white p-5">
              <div className="text-base font-semibold mb-1">
                Binocular vision
              </div>
              <div className="text-sm text-muted">
                Convergence and eye teaming
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-white p-5">
              <div className="text-base font-semibold mb-1">
                Children&apos;s assessments
              </div>
              <div className="text-sm text-muted">
                Amblyopia and early screening
              </div>
            </div>
            <div className="hidden md:contents">
              <div className="rounded-2xl border border-border bg-white p-5">
                <div className="text-base font-semibold mb-1">
                  Amblyopia management
                </div>
                <div className="text-sm text-muted">
                  Early detection and treatment plans
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-white p-5">
                <div className="text-base font-semibold mb-1">
                  Convergence problems
                </div>
                <div className="text-sm text-muted">
                  Binocular vision assessments
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-white p-5">
                <div className="text-base font-semibold mb-1">
                  Eye movement disorders
                </div>
                <div className="text-sm text-muted">
                  Ocular motility assessments
                </div>
              </div>
            </div>
          </div>
          <a
            href="/services"
            className="mt-4 inline-block text-sm font-semibold text-accent md:hidden"
          >
            View all services &rarr;
          </a>
        </div>
        <div className="mt-10 rounded-2xl bg-accent p-6 md:p-10 text-center md:flex md:items-center md:justify-between md:text-left">
          <div>
            <h3 className="font-display text-xl font-bold text-cream mb-2">
              Ready to book a consultation?
            </h3>
            <p className="text-sm text-cream/80 mb-5 md:mb-0">
              Most appointments available within the week.
            </p>
          </div>
          <Link
            href="/book"
            className="w-full md:w-auto md:px-8 rounded-xl bg-cream py-3.5 text-sm font-semibold text-accent inline-block text-center"
          >
            Book appointment
          </Link>
        </div>
      </div>
      x``
      <Footer />
    </div>
  );
}
