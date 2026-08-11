import { Logo } from "../Logo";
import { NavButton } from "../NavButton";

export function Header() {
  return (
    <header className="w-full bg-brand-dark">
      <div className="max-w-6x1 mx-auto flex items-center justify-between px-4 sm:px-6 md:px-16 lg:px-40 xl:px-60 h-20">
        <Logo />
        <div className="flex gap-4">
          <NavButton title="Produtos" />
          <NavButton title="Por que comprar ?" />
        </div>
      </div>
    </header>
  );
}
