import Image from "next/image";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div>
      <Navbar />

      <div className="px-6 py-10 md:px-14 md:py-16 max-w-7xl mx-auto">
        <div className="md:grid md:grid-cols-[340px_1fr] md:gap-16">
          <div className="w-full max-w-70 mx-auto md:max-w-none aspect-square rounded-full overflow-hidden mb-8 md:mb-0">
            <Image
              src="/images/hero-photo.jpg"
              alt="Dr. Aria Whitfield, orthoptist"
              width={400}
              height={400}
              className="w-full h-full object-cover object-top"
            />
          </div>

          <div>
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Dr. Aria Whitfield
            </h1>

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="text-xs font-semibold bg-accent-soft text-accent px-3 py-1.5 rounded-full">
                Registered Orthoptist
              </span>
              <span className="text-xs font-semibold bg-accent-soft text-accent px-3 py-1.5 rounded-full">
                OAA member
              </span>
              <span className="text-xs font-semibold bg-accent-soft text-accent px-3 py-1.5 rounded-full">
                12 years experience
              </span>
            </div>

            <p className="text-base text-text/85 mb-8 md:max-w-lg">
              Registered orthoptist with over a decade of experience in
              paediatric and adult eye movement assessments, based in Sydney.
            </p>

            <h2 className="font-display text-xl font-bold mb-4">
              Areas of expertise
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
              <div className="rounded-2xl border border-border bg-white p-4">
                <div className="text-sm font-semibold mb-0.5">
                  Squint and strabismus
                </div>
                <div className="text-xs text-muted">
                  Assessment and ongoing management
                </div>
              </div>
              <div className="rounded-2xl border border-border bg-white p-4">
                <div className="text-sm font-semibold mb-0.5">
                  Amblyopia management
                </div>
                <div className="text-xs text-muted">
                  Early detection and treatment plans
                </div>
              </div>
              <div className="rounded-2xl border border-border bg-white p-4">
                <div className="text-sm font-semibold mb-0.5">
                  Convergence problems
                </div>
                <div className="text-xs text-muted">
                  Binocular vision assessments
                </div>
              </div>
              <div className="rounded-2xl border border-border bg-white p-4">
                <div className="text-sm font-semibold mb-0.5">
                  Eye movement disorders
                </div>
                <div className="text-xs text-muted">
                  Ocular motility assessments
                </div>
              </div>
            </div>

            <Link
              href="/book"
              className="w-full md:w-auto md:px-8 rounded-xl bg-accent py-3.5 text-sm font-semibold text-cream inline-block text-center"
            >
              Book a consultation
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
