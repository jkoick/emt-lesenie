import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EMT Lešenie Michalovce | Prenájom a predaj lešenia",
  description: "Profesionálny prenájom a predaj lešenia v regióne Michalovce. Rýchla montáž, certifikované komponenty, skúsený tím. Kontaktujte nás ☎ +421 904 350 340",
  keywords: [
    "lešenie",
    "lešenie michalovce",
    "prenájom lešenia",
    "predaj lešenia",
    "rámové lešenie",
    "fasádne lešenie",
    "montáž lešenia",
    "EMT lešenie",
    "stavebné lešenie",
    "lešenie na dom",
  ],
  authors: [{ name: "EMT Lešenie" }],
  creator: "EMT Lešenie",
  publisher: "EMT Lešenie",
  metadataBase: new URL("https://www.emtlesenie.sk"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "sk_SK",
    url: "https://www.emtlesenie.sk",
    title: "EMT Lešenie Michalovce | Prenájom a predaj lešenia",
    description: "Profesionálny prenájom a predaj lešenia v regióne Michalovce. Rýchla montáž, certifikované komponenty, skúsený tím.",
    siteName: "EMT Lešenie",
    images: [
      {
        url: "/images/hero-background.jpg",
        width: 1200,
        height: 630,
        alt: "EMT Lešenie - Profesionálne lešenie",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EMT Lešenie Michalovce | Prenájom a predaj lešenia",
    description: "Profesionálny prenájom a predaj lešenia v regióne Michalovce. Rýchla montáž, certifikované komponenty.",
    images: ["/images/hero-background.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "", // Pridajte Google Search Console verification kód
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "EMT Lešenie",
  description: "Profesionálny prenájom a predaj lešenia v regióne Michalovce",
  url: "https://www.emtlesenie.sk",
  telephone: "+421904350340",
  email: "emtlesenie@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Petrovce nad Laborcom",
    addressCountry: "SK",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 48.8666,
    longitude: 21.9166,
  },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 48.8666,
      longitude: 21.9166,
    },
    geoRadius: "50000",
  },
  priceRange: "€€",
  image: "https://www.emtlesenie.sk/images/hero-background.jpg",
  logo: "https://www.emtlesenie.sk/images/logo.png",
  sameAs: [
    "https://www.facebook.com/EmtLesenieMichalovce",
    "https://www.instagram.com/emt_lesenie_mi/",
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "07:00",
    closes: "17:00",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "1",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Služby lešenia",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Prenájom lešenia",
          description: "Profesionálny prenájom rámového lešenia",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Predaj lešenia",
          description: "Predaj nových a používaných komponentov lešenia",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Montáž lešenia",
          description: "Rýchla a bezpečná montáž lešenia certifikovaným tímom",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${inter.variable} flex min-h-screen flex-col bg-background text-foreground antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          forcedTheme="light"
        >
          {children}
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
