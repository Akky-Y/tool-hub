import { MobileNav } from "@/components/mobile-nav";

export default function Header() {
  return (
    <header className="border-b h-16 flex items-center gap-4">
      <div className="lg:hidden">
        <MobileNav />
      </div>
      <p className="font-bold text-lg">ToolHub</p>
    </header>
  );
}
