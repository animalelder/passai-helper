import type { Metadata } from "next";
import { Alatsi, Cinzel_Decorative, Inter, Open_Sans } from "next/font/google";

import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-open-sans",
  preload: true,
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  preload: true,
});

const cinzel = Cinzel_Decorative({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cinzel",
  weight: ["700", "900"],
  preload: true,
});

const alatsi = Alatsi({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-alatsi",
  weight: "400",
  preload: true,
});

export const metadata: Metadata = {
  title: "PASS.ai: The Parent Helper",
  description: "Overwhelmed? Pass it to your AI assistant.",
  metadataBase: new URL("https://passai-helper.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
    >
      <body
        className={`${openSans.variable} ${inter.variable} ${cinzel.variable} ${alatsi.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster
            richColors
            closeButton
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
