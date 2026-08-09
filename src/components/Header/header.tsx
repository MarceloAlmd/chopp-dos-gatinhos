import { Logo } from "../Logo";
import { NavButton } from "../NavButton";

export function Header() {
  return (
    <header className="flex items-center justify-between px-6 h-20 w-full bg-brand-dark">
      <Logo />
      <NavButton />
    </header>
  );
}
