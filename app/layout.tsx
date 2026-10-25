import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "ZWLA | Justice, Dignity & Equality", description: "A digital access-to-justice concept for the Zimbabwe Women Lawyers Association, designed by VanillaWebz.", applicationName: "ZWLA Digital Platform" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
