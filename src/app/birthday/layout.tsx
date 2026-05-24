import { Metadata } from "next";
import localFont from "next/font/local";
import "./style.css";
import { ScrollProgress } from "@/components/ui/scroll-progress";

export const metadata: Metadata = {
  title: "Alvin Dennis — Builder | Maker | Manager",
  description:
    "Builder, maker, and developer passionate about crafting digital solutions and innovative technology. I blend creativity with technical expertise to solve real-world problems and empower communities.",
  authors: [{ name: "Alvin Dennis", url: "https://alvinn.me/" }],
  openGraph: {
    title: "Alvin Dennis — Builder | Maker | Manager",
    description:
      "Builder, maker, and developer passionate about crafting digital solutions and innovative technology. I blend creativity with technical expertise to solve real-world problems and empower communities.",
    siteName: "Alvin Dennis — Builder | Maker | Manager",
    url: "https://alvinn.me/",
    type: "website",
    images: [
      {
        url: "/assets/og.png",
        width: 1200,
        height: 630,
        alt: "Alvin Dennis Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alvin Dennis — Builder | Maker | Manager",
    description:
      "Builder, maker, and developer passionate about crafting digital solutions and innovative technology. I blend creativity with technical expertise to solve real-world problems and empower communities.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
  },
  metadataBase: new URL("https://alvinn.me/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://images.weserv.nl" />
        <link rel="dns-prefetch" href="https://images.weserv.nl" />
      </head>
      <body
      >
        <main className="mx-auto flex-1 px-5 pb-10">
          <ScrollProgress className="bg-primary" />
          {children}
        </main>
      </body>
    </html>
  );
}
