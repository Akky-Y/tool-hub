import { type TagId, allTags } from "@/data/tag";

export const mainTags: TagId[] = ["illust", "photo", "icon"];

export const getTagLabel = (tagId: TagId) => {
  return allTags.find((tag) => tag.id === tagId)?.label ?? "";
};
