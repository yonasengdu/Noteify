"use client";

import "./globals.css";
import dynamic from "next/dynamic";
import { ThemeProvider } from "next-themes";

const ConvexClientProvider = dynamic(
  () => import("@/components/providers/convex-provider"),
  { ssr: false }
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ConvexClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            storageKey="NoteIt-theme-1"
          >
            {children}
          </ThemeProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
