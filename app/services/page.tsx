import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function ServicesPage() {
  return (
    <div>
      <Navbar />

      <div className="px-6 py-10 md:px-14 md:py-16 max-w-7xl mx-auto">
        <p className="text-xs font-semibold tracking-wide text-terracotta mb-2">
          SERVICES
        </p>

        <h1 className="font-display text-2xl md:text-4xl font-bold mb-8 md:mb-11">
          What I assess and treat
        </h1>

        <div className="flex flex-col gap-4 md:grid md:grid-cols-3 md:gap-5">
          <div className="rounded-2xl border border-border bg-white p-5">
            <div className="text-base font-semibold mb-1">Squint and strabismus</div>
            <div className="text-sm text-muted">Assessment and management</div>
          </div>

          <div className="rounded-2xl border border-border bg-white p-5">
            <div className="text-base font-semibold mb-1">Binocular vision</div>
            <div className="text-sm text-muted">Convergence and eye teaming</div>
          </div>

          <div className="rounded-2xl border border-border bg-white p-5">
            <div className="text-base font-semibold mb-1">Children&apos;s assessments</div>
            <div className="text-sm text-muted">Amblyopia and early screening</div>
          </div>

          <div className="rounded-2xl border border-border bg-white p-5">
            <div className="text-base font-semibold mb-1">Amblyopia management</div>
            <div className="text-sm text-muted">Early detection and treatment plans</div>
          </div>

          <div className="rounded-2xl border border-border bg-white p-5">
            <div className="text-base font-semibold mb-1">Convergence problems</div>
            <div className="text-sm text-muted">Binocular vision assessments</div>
          </div>

          <div className="rounded-2xl border border-border bg-white p-5">
            <div className="text-base font-semibold mb-1">Eye movement disorders</div>
            <div className="text-sm text-muted">Ocular motility assessments</div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}