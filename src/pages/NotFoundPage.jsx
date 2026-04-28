import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-dark text-white px-6 text-center pt-[140px] pb-[80px]">
      <h1 className="text-[80px] md:text-[140px] font-semibold leading-none mb-[10px] text-orange">
        404
      </h1>
      <h2 className="text-[24px] md:text-[36px] font-semibold tracking-[1px] uppercase mb-[16px]">
        Page Not Found
      </h2>
      <p className="text-[14px] md:text-[18px] text-white/70 max-w-[520px] mb-[36px]">
        The page you&apos;re looking for doesn&apos;t exist or may have been moved.
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
