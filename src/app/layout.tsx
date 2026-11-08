import type { Metadata, Viewport } from "next";
import "./globals.css";
import { poppins, cormorant, cinzel, greatVibes } from "./fonts";

export const metadata: Metadata = {
  title: "Tigang Sasih Gelvin",
  description: "Undangan Upacara Tigang Sasih Gelvin",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="h-full antialiased">
      <body
        className={`${poppins.variable} ${cormorant.variable} ${cinzel.variable} ${greatVibes.variable} min-h-full flex flex-col font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
