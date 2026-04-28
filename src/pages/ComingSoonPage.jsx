import { Link } from "react-router-dom";

export default function ComingSoonPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-dark text-white px-6 text-center pt-[140px] pb-[80px]">
      <h1 className="text-[36px] md:text-[72px] font-semibold tracking-[2px] uppercase mb-[20px]">
        Coming Soon
      </h1>
      <p className="text-[14px] md:text-[18px] text-white/70 max-w-[560px] mb-[40px]">
        We&apos;re crafting something exceptional. This page will be available shortly.
        In the meantime, explore the rest of our world.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 bg-orange text-white py-[12px] px-[28px] rounded-full text-[14px] md:text-[16px] font-medium"
      >
        Back to Home
      </Link>
    </section>
  );
}
