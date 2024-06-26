import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppConfig } from "@/app.config";
import Footer from "@/components/footer";
import Header from "@/components/header";
import SideBar from "@/components/side-bar";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: AppConfig.title,
  description: AppConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(inter.className, "h-dvh flex flex-col")}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense>
            <Header />
          </Suspense>
          <main className="flex flex-1">
            <Suspense>
              <SideBar />
            </Suspense>
            <div className="flex-1 bg-muted/30">
              <Suspense>{children}</Suspense>
            </div>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
