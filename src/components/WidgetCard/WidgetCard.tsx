import Image from "next/image";
import Link from "next/link";

export function WidgetCard({
  name,
  imageUrl,
}: {
  name: string;
  imageUrl: string;
}) {
  return (
    <div className="ring-2 ring-black w-full p-2 md:w-1/3">
      <figure>
        <Link href={`/${name.toLowerCase()}`}>
          <Image
            src={imageUrl}
            alt="widget pic"
            width={1000}
            height={1000}
            className="w-full h-[200px] object-cover md:object-contain"
          />
          <figcaption>{name}</figcaption>
        </Link>
      </figure>
    </div>
  );
}
