"use client";

import Filter from "@/components/filter";
import { Button } from "@/components/ui/button";
import { useTagParams } from "@/hooks/tag-params";
import { getTagLabel, mainTags } from "@/lib/tag";
import Link from "next/link";

export default function SideBar() {
  const { addTagToSearchParams } = useTagParams();

  return (
    <div className="hidden lg:block w-64 border-r p-4 space-y-6">
      <div className="flex flex-col">
        {mainTags.map((tagId) => (
          <Button variant="ghost" className="justify-start" key={tagId} asChild>
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
