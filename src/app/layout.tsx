import type { Metadata } from "next";
import "./globals.css";
import NavbarWrapper from "./_components/ui/NavbarWrapper";

export const metadata: Metadata = {
  title: "Facundo Duque - Blockchain Developer",
  description: "Facundo Duque professional developer portfolio built on Nextjs.",
  icons: {
    icon: [
      { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: "/favicons/apple-touch-icon.png",
    shortcut: "/favicons/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavbarWrapper />
        {children}
      </body>
    </html>
  );
}