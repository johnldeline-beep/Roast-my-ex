import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ONE15 Media | Clear Signal. Better Decisions.",
  description:
    "Independent website audits and audio-led creative work from ONE15 Media.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
