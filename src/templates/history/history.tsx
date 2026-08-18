import Image from "next/image";

export function HistoryTemplate() {
  return (
    <div className="m-7">
      <h1 className="font-bold text-2xl">
        Ajude essa pobre Familia com seus gatos
      </h1>

      <div className="mt-7 flex flex-col gap-1">
        <Image
          className="rounded-2xl"
          src="/meme/img1.jpeg"
          width={300}
          height={300}
          alt="all image "
        />
        <Image
          className="rounded-2xl"
          src="/meme/img5.jpeg"
          width={300}
          height={300}
          alt="all image"
        />
        <Image
          className="rounded-2xl"
          src="/meme/img4.jpeg"
          width={300}
          height={300}
          alt="all image"
        />
        <Image
          className="rounded-2xl"
          src="/meme/img7.jpeg"
          width={300}
          height={300}
          alt="all image"
        />
        <Image
          className="rounded-2xl"
          src="/meme/img9.jpeg"
          width={300}
          height={300}
          alt="all image"
        />
        <Image
          className="rounded-2xl"
          src="/meme/img10.jpeg"
          width={300}
          height={300}
          alt="all image"
        />
        <Image
          className="rounded-2xl"
          src="/meme/img11.jpeg"
          width={300}
          height={300}
          alt="all image"
        />
        <Image
          className="rounded-2xl"
          src="/meme/img12.jpeg"
          width={300}
          height={300}
          alt="all image"
        />
      </div>
    </div>
  );
}
