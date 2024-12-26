import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "School Dashboard",
  description: "School management system in NextJs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-poppins bg-gray-50">
        
        {children}
      </body>
    </html>
  );
}
