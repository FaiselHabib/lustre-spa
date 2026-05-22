import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center bg-ivory-50 px-6 text-center">
      <p className="text-[10px] uppercase tracking-luxe text-forest/55">404</p>
      <h1 className="mt-4 font-display text-5xl text-forest-deep md:text-6xl">
        Lost in beauty.
      </h1>
      <p className="mt-4 max-w-md text-forest/65">
        The page you&apos;re looking for doesn&apos;t exist — let&apos;s take you back.
      </p>
      <Link
        href="/en"
        className="mt-8 rounded-full bg-forest px-7 py-3.5 text-[11px] uppercase tracking-luxe text-ivory-50 hover:bg-forest-deep"
      >
        Return Home
      </Link>
    </main>
  );
}
