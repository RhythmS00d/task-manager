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
    <div className="ring-2 ring-black w-1/4 p-2">
      <figure>
        <Link href={`/${name.toLowerCase()}`}>
          <Image
            src={imageUrl}
            alt="widget pic"
            width={1000}
            height={1000}
            className="w-full h-[200px] object-cover"
          />
          <figcaption>{name}</figcaption>
        </Link>
      </figure>
    </div>
  );
}
