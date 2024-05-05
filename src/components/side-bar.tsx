"use client";

import Filter from "@/components/filter";
import { Button } from "@/components/ui/button";
import { mainTags } from "@/data/tag";
import { useTagParams } from "@/hooks/tag-params";
import { getTagLabel } from "@/lib/tag";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function SideBar() {
  const { addTagToSearchParams } = useTagParams();
  const searchParams = useSearchParams();
  const tags = searchParams.get("tags")?.split(",");

  return (
    <div className="hidden lg:block w-64 border-r p-4 space-y-6">
      <div className="flex flex-col">
        {mainTags.map((tagId) => (
          <Button
            variant="ghost"
            className={cn(
              "justify-start",
              tags?.includes(tagId) && "bg-accent",
            )}
            key={tagId}
            asChild
          >
            <Link href={`/?tags=${addTagToSearchParams(tagId)}`}>
              {getTagLabel(tagId)}
            </Link>
          </Button>
        ))}
      </div>
      <Filter />
    </div>
  );
}
