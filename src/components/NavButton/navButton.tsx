import Link from "next/link";

type NavButtonProps = {
  title: string;
};

export function NavButton({ title }: NavButtonProps) {
  return (
    <nav className="flex gap-4 text-brand-gray-100">
      <Link
        href="/"
        className="text-[12px] sm:text-[16px] border-b border-transparent pb-0.5 transition-all hover:border-brand-gray-100"
      >
        {title}
      </Link>
    </nav>
  );
}
