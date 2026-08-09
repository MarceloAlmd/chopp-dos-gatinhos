import { Logo } from "../Logo";

export function Header() {
  return (
    <header className="flex items-center px-6 h-20 w-full bg-brand-dark">
      <Logo />
    </header>
  );
}
