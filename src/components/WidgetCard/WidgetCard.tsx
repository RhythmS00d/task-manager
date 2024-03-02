import Image from "next/image";

export function WidgetCard({ name }: { name: string }) {
  return (
    <div className="ring-2 ring-black h-fit w-1/3 p-2">
      <figure>
        <Image src="" alt="" width={100} height={100} className="w-full" />
        <figcaption>{name}</figcaption>
      </figure>
    </div>
  );
}
