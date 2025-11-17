import type { Metadata } from "next";
import "./globals.css";
import NavbarWrapper from "./_components/ui/NavbarWrapper";

export const metadata: Metadata = {
  title: "Developer Portfolio - Aalandev",
  description: "Facundo Duque professional developer portfolio built on Nextjs.",
  icons: "favicon.png"
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