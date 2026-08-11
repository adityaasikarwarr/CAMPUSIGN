import type { Metadata } from "next";
import "./global.css";

import { AuthProvider } from "@/context/AuthContext";

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
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
