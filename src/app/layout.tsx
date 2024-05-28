import type { Metadata } from "next";
import "./globals.css";
import { ChakraProviders } from "@/components/provider/ChakraProvider";
import { fonts } from "@/utils/fonts";
import { AuthProvider } from "@/components/provider/AuthProvider";

export const metadata: Metadata = {
  title: "Pelihara - E-commerce Specializing in Pet Needs",
  description: "E-commerce Specializing in Pet Needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fonts.jkt_sans.variable} ${fonts.dm_sans.variable} ${fonts.raleway.variable} ${fonts.inter.variable}`}
      >
        <AuthProvider>
          <ChakraProviders>{children}</ChakraProviders>
        </AuthProvider>
      </body>
    </html>
  );
}
