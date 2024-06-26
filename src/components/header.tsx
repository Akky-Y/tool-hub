import { AppConfig } from "@/app.config";
import { MobileNav } from "@/components/mobile-nav";
import Search from "@/components/search";
import { Suspense } from "react";

export default function Header() {
  return (
    <header className="p-4 border-b h-16 flex items-center gap-4">
      <div className="lg:hidden">
        <Suspense>
          <MobileNav />
        </Suspense>
      </div>
      <p className="font-bold text-lg">{AppConfig.title}</p>
      <Search />
    </header>
  );
}
