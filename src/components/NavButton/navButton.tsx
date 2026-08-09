import Link from "next/link";
export function NavButton() {
  return (
    <nav className="flex gap-4 text-brand-white">
      <Link
        href="/"
        className="text-[12px] sm:text-[16px] border-b border-transparent pb-0.5 transition-all hover:border-brand-white"
      >
        Produtos
      </Link>
      <Link
        href="/history"
        className="text-[12px] sm:text-[16px] border-b border-transparent pb-0.5 transition-all hover:border-brand-white"
      >
        Por que Comprar ?
      </Link>
    </nav>
  );
}
