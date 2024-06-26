import type { TagId } from "@/data/tag";
import { getTagLabel } from "@/lib/tag";
import type { Tag } from "@/types/tags";
import Image from "next/image";
import Link from "next/link";

export default function ItemCard({
  title,
  tags,
  href,
  id,
}: {
  title: string;
  tags: TagId[];
  href: string;
  id: string;
}) {
  return (
    <div className="hover:shadow-lg transition duration-500 relative p-4 border rounded-md shadow-sm bg-card">
      <div className="aspect-video relative overflow-hidden border mb-2 rounded">
        <Image
          fill
          className="object-cover"
          src={`/images/${id}.png`}
          alt={""}
        />
      </div>
      <h2 className="text-sm font-semibold">
        <Link href={href} target="_blank">
          {title}
          <span className="absolute inset-0" />
        </Link>
      </h2>
      <div className="flex relative z-10 flex-wrap mt-2 gap-2">
        {tags.map((tagId) => (
          <Link
            key={tagId}
            href={`/${tagId}`}
            className="border whitespace-nowrap text-muted-foreground bg-muted text-xs px-0.5 py-1"
          >
            {getTagLabel(tagId)}
          </Link>
        ))}
      </div>
    </div>
  );
}
