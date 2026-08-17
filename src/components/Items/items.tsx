import Image from "next/image";

export interface Product {
  title: string;
  description: string;
  price: number;
  src: string;
}

export function Items({ title, description, price, src }: Product) {
  return (
    <div className="w-full h-25 md:h-35 rounded-2xl mt-3 mb-3 border border-brand-gray-100 flex items-center justify-between p-3">
      <div className="flex items-center">
        <div className="relative w-25 h-20 md:h-25 md:w-45 border-r border-brand-gray-100">
          <Image
            src={src}
            alt="product"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="px-2">
          <h2 className="text-[18px] font-bold">{title}</h2>
          <p className="text-[12px]">{description}</p>
        </div>
      </div>

      <span className="font-bold">
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(price)}
      </span>
    </div>
  );
}
