import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fitwithdeveloper.com"),
  title: "Fit with Developer | Train Smart. Eat Right. Transform Forever.",
  description: "Train Smart. Eat Right. Transform Forever. Get premium 1-on-1 online fitness coaching, personalized nutrition plans, and elite accountability from Rakesh Bharti at Fit with Developer.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Fit with Developer | Train Smart. Eat Right. Transform Forever.",
    description: "Train Smart. Eat Right. Transform Forever. Get premium 1-on-1 online fitness coaching, personalized nutrition plans, and elite accountability from Rakesh Bharti at Fit with Developer.",
    url: "https://fitwithdeveloper.com",
    siteName: "Fit with Developer",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fit with Developer | Train Smart. Eat Right. Transform Forever.",
    description: "Train Smart. Eat Right. Transform Forever. Get premium 1-on-1 online fitness coaching, personalized nutrition plans, and elite accountability from Rakesh Bharti at Fit with Developer.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${plusJakartaSans.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans bg-cream text-charcoal" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
