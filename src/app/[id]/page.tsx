import ItemCard from "@/components/item-card";
import { type ItemTypes, allItems } from "@/data";
import Link from "next/link";

export default function Page({
  params: { id },
}: { params: { id: ItemTypes } }) {
  const currentItems = allItems[id] || [];

  if (currentItems.length === 0) {
    return (
      <p className="text-sm text-muted-foreground my-10">
        このページは存在しません
      </p>
    );
  }

  return (
    <div className="p-4 grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {currentItems.map((item) => (
        <ItemCard
          key={item.title}
          imageURL={item.imageURL}
          href={item.href}
          title={item.title}
          tags={item.tags}
        />
      ))}
    </div>
  );
}
