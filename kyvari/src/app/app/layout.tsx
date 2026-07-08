import type { Metadata } from "next";
import { Sidebar } from "@/components/app/sidebar";

export const metadata: Metadata = {
  title: "Workspace",
};

export default function AppLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-dvh bg-paper">
      <Sidebar />
      {/* Desktop: offset by rail. Mobile: offset by top bar + bottom tabs. */}
      <main className="pb-24 pt-14 lg:pb-0 lg:pl-64 lg:pt-0">{children}</main>
    </div>
  );
}
