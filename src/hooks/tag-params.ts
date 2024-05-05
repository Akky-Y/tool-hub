"use client";

import type { TagId } from "@/data/tag";
import { mainTags } from "@/lib/tag";
import { useSearchParams } from "next/navigation";

export const useTagParams = () => {
  const defaultTags = (useSearchParams()
    .get("tags")
    ?.split(",")
    .filter(Boolean) ?? []) as TagId[];

  const addTagToSearchParams = (tag: TagId, keepMainTag?: boolean) => {
    const src = keepMainTag
      ? defaultTags
      : defaultTags.filter((t: TagId) => !mainTags.includes(t));

    if (src.includes(tag)) {
      return src.join(",");
    }
    return [...src, tag].join(",");
  };

  const removeTagToSearchParams = (tag: TagId) => {
    return defaultTags.filter((t: TagId) => t !== tag).join(",");
  };

  return { addTagToSearchParams, removeTagToSearchParams };
};
