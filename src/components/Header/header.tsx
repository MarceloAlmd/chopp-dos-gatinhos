import { Logo } from "../Logo";
import { NavButton } from "../NavButton";

export function Header() {
  return (
    <header className="flex items-center justify-between px-1 md:px-4 xl:px-60 h-20 w-full bg-brand-dark">
      <Logo />
      <NavButton />
    </header>
  );
}
