import { type TagId, allTags } from "@/data/tag";

export const getTagLabel = (tagId: TagId) => {
  return allTags.find((tag) => tag.id === tagId)?.label ?? "";
};
