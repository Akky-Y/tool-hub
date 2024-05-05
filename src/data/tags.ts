export const allTags = [
  { id: "no-license-required", label: "ライセンス表記不要" },
  { id: "photo", label: "写真" },
  { id: "video", label: "ビデオ" },
  { id: "illust", label: "イラスト" },
  { id: "icon", label: "アイコン" },
  { id: "free", label: "無料" },
  { id: "public-domain", label: "パブリックドメイン" },
] as const;

export type TagId = (typeof allTags)[number]["id"];
