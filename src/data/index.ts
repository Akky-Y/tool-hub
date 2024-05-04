import { icons } from "@/data/icon";
import { illusts } from "@/data/illust";
import { photos } from "@/data/photo";

export const allItems = {
  icons,
  illusts,
  photos,
} as const;

export type ItemTypes = keyof typeof allItems;
