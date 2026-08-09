import { Cat, PawPrint } from "lucide-react";
import { Kaushan_Script } from "next/font/google";

const kaushanScript = Kaushan_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-logo",
});

export function Logo() {
  return (
    <div className="flex items-center justify-center gap-2">
      <Cat className="text-brand-white w-4 h-4 sm:w-8 sm:h-8" />
      <h1
        className={`text-brand-white ${kaushanScript.variable} font-logo whitespace-nowrap text-[14px] md:text-2xl`}
      >
        Chopp dos gatinhos
      </h1>
      <PawPrint className="text-brand-white w-4 h-4 sm:w-8 sm:h-8" />
    </div>
  );
}
