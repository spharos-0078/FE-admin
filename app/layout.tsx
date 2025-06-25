import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";

import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { MainSidebar } from "@/components/MainSidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "관리자 대시보드",
  description: "Piece of Cake 관리자 대시보드",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${inter.className} antialiased`}>
        <SidebarProvider>
          <MainSidebar />
          <main className="flex-1 overflow-auto">{children}</main>
        </SidebarProvider>
      </body>
    </html>
  );
}
