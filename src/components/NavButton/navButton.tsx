"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavButtonProps = {
  title: string;
};

export function NavButton({ title }: NavButtonProps) {
  const pathname = usePathname();

  const href = title === "Produtos" ? "/" : "/history";
  const isActive = pathname === href;

  return (
    <nav className="flex gap-4 text-brand-gray-100">
      <Link
        href={href}
        className={`
            text-[12px] sm:text-[16px] border-b pb-0.5 transition-all
            ${
              isActive
                ? "border-brand-gray-100"
                : "border-transparent hover:border-brand-gray-100"
            }
          
          `}
      >
        {title}
      </Link>
    </nav>
  );
}
