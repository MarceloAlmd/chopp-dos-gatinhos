import { Items } from "@/components/Items";
import { Search } from "lucide-react";

export function Products() {
  return (
    <div className="max-w-6x1 mx-auto px-4 sm:px-6 md:px-16 lg:px-40 xl:px-60">
      <div className="flex flex-col gap-4  md:max-w-90 mt-3 md:mt-7">
        <h1 className="flex items-center gap-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-gray-300">
          Nosso Chopp&apos;s
        </h1>

        <p className="font-medium text-brand-gray-300">
          Feitos com carinho para refrescar você e ajudar quem mais precisa.
        </p>

        <div className="flex items-center gap-4 pl-2.5 border border-brand-gray-100 rounded-sm">
          <Search size={20} />
          <input
            className="py-2.5 w-full outline-0"
            placeholder="Buscar sabor..."
            type="text"
          />
        </div>
      </div>

      <Items />
      <Items />
      <Items />
      <Items />
      <Items />
      <Items />
      <Items />
    </div>
  );
}
