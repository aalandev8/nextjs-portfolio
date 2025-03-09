import type { Metadata } from "next";
import "./globals.css";
import NavbarWrapper from "./_components/ui/NavbarWrapper";

export const metadata: Metadata = {
  title: "Developer Portfolio - Aalandev",
  description: "Facundo Duque professional developer portfolio built on Nextjs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <NavbarWrapper />
        {children}
      </body>
    </html>
  );
}