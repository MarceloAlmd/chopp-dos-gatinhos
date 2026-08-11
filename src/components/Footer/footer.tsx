import { Logo } from "../Logo";
import { PawPrint } from "lucide-react";
import { NavButton } from "../NavButton";
import { PhoneForwarded, Mail } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full bg-brand-dark h-30">
      <div className="max-w-6x1 mx-auto flex items-center justify-between px-4 sm:px-6 md:px-16 lg:px-40 xl:px-60 h-full">
        <div className="flex flex-col items-start gap-2">
          <Logo />
          <p className="text-brand-gray-100 max-w-60 text-[12px] sm:text-[16px]">
            Cada chopp vendido ajuda a cuidar dos nosso gatinhos.{" "}
            <PawPrint className="inline text-yellow-700" />
          </p>
        </div>

        <div className="hidden sm:flex flex-col items-start gap-2 text-[12px] sm:text-[16px]">
          <span className="text-brand-gray-100 mb-1 font-bold">Navegação</span>
          <NavButton title="Produtos" />
          <NavButton title="Por que Comprar ?" />
        </div>

        <div className="hidden sm:flex flex-col items-start gap-1 text-[12px] sm:text-[16px]">
          <span className="text-brand-gray-100 font-bold text-[12px] sm:text-[16px]">
            Contato
          </span>
          <div className="flex items-center justify-center gap-2">
            <PhoneForwarded className="text-brand-gray-100 w-4 h-4" />
            <span className="text-brand-gray-100 text-[12px] sm:text-[16px]">
              (96) 99174-4433
            </span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Mail className="text-brand-gray-100 w-4 h-4" />
            <span className="text-brand-gray-100 text-[12px] sm:text-[16px]">
              contato@gatinho.com
            </span>
          </div>
        </div>

        <Image src="/footer_gatinhos.png" width={100} height={100} alt="cats" />
      </div>
    </footer>
  );
}
