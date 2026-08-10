import type { Metadata } from "next";
import "./global.css";

export const metadata: Metadata = {
  title: "CampusSign AI",
  description: "AI-powered automatic sign language translation platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
