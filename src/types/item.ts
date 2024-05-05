import type { TagId } from "@/data/tags";

export type Item = {
  imageURL: string;
  href: string;
  title: string;
  tags: TagId[];
};
