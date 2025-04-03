import type { Metadata } from "next";
// eslint-disable-next-line camelcase
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";

import { initPayload } from "@/app/api/utils/getPayload";
import Footer from "@/frontend/_components/footer";
import Header from "@/frontend/_components/header";
import CraftoProvider from "@/frontend/_providers/CraftoProvider";
import ReactSlickProvider from "@/frontend/_providers/ReactSlickProvider";
import { routing } from "@/i18n/routing";
import "@/frontend/globals.css";

async function getHeaderData(locale: string) {
  try {
    const payload = await initPayload();

    const pagesData = await payload.find({
      collection: "pages",
      where: {
        showInMenu: {
          equals: true,
        },
        isActive: {
          equals: true,
        },
      },
      sort: "menuOrder",
      locale: locale as "en" | "tr",
    });

    const dynamicPages = pagesData.docs.map((page) => ({
      ...page,
      menuOrder: page.menuOrder ?? 0,
    }));

    return { dynamicPages };
  } catch (error) {
    console.error("Error fetching header data:", error);
    return { dynamicPages: [] };
  }
}

async function getFooterData() {
  try {
    const payload = await initPayload();
    const locales = ["en", "tr"];
    const footerData: any = { content: {} };

    for (const locale of locales) {
      const response = await payload.findGlobal({
        slug: "footer",
        locale: locale as "en" | "tr" | "all",
      });

      if (response?.content) {
        footerData.content[locale] = {
          copyright: response.content.copyright,
          company: response.content.company,
          legal: response.content.legal,
          social: response.content.social,
          newsletter: response.content.newsletter,
        };
      }
    }
    return footerData;
  } catch (error) {
    console.error("Error fetching footer data:", error);
    return null;
  }
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://usesafe-website.vercel.app"),

  title: {
    default: "UseSafe | Digital Product Passport & Traceability Solutions",
    template: "%s | UseSafe",
  },

  description: "Transform your product compliance and traceability with UseSafe's Digital Product Passport solution. Ensure safety, sustainability, and regulatory compliance across your supply chain.",

  keywords: [
    "digital product passport",
    "DPP solution",
    "product verification",
    "supply chain traceability",
    "product compliance",
    "sustainability tracking",
    "certification system",
    "regulatory compliance",
    "product authentication",
    "supply chain visibility",
    "MSDS management",
    "chemical compliance",
    "EU compliance",
    "product safety",
    "supply chain management",
  ],

  authors: [{ name: "UseSafe", url: "https://usesafe-website.vercel.app" }],

  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "tr_TR",
    url: "https://usesafe-website.vercel.app",
    siteName: "UseSafe",
    title: "UseSafe | Digital Product Passport & Traceability Platform",
    description: "Transform your product compliance and traceability with UseSafe's Digital Product Passport solution. Ensure safety, sustainability, and regulatory compliance.",
    images: [
      {
        url: "/image/og/usesafe-og-default.png",
        width: 1200,
        height: 630,
        alt: "UseSafe Digital Product Passport Platform",
        type: "image/png",
      },
      {
        url: "/image/og/usesafe-og-square.png",
        width: 1080,
        height: 1080,
        alt: "UseSafe DPP Platform",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "UseSafe | Digital Product Passport Platform",
    description: "Transform product compliance & traceability with UseSafe DPP solution",
    images: [{
      url: "/image/twitter/usesafe-twitter-card.png",
      width: 1200,
      height: 630,
      alt: "UseSafe Digital Product Passport Platform",
    }],
    site: "@Usesafe_",
    creator: "@Usesafe_",
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
    nocache: false,
    notranslate: false,
  },

  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },

  icons: {
    icon: [
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },

  alternates: {
    canonical: "https://usesafe-website.vercel.app",
    languages: {
      "en": "/en",
      "tr": "/tr",
    },
  },

  other: {
    "json-ld": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "UseSafe",
      url: "https://usesafe-website.vercel.app",
      logo: "https://usesafe-website.vercel.app/logos/logo-primary.png",
      description: "Digital Product Passport and Traceability Solutions",
      sameAs: [
        "https://x.com/Usesafe_",
        "https://www.linkedin.com/company/doruksistem-as",
        "https://www.facebook.com/doruksistem",
        "https://www.instagram.com/usesafe_safeuse",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+90-216-337-8383",
        email: "info@doruksistem.com.tr",
        contactType: "customer service",
        areaServed: ["TR", "EU"],
        availableLanguage: ["English", "Turkish"],
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Feneryolu Mah. Fahrettin Kerim Gökay Cad. No:74/2",
        addressLocality: "Kadıköy",
        addressRegion: "Istanbul",
        postalCode: "34730",
        addressCountry: "TR",
      },
    }),
  },

  applicationName: "UseSafe",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  themeColor: "#0066FF",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    minimumScale: 1,
    userScalable: false,
    viewportFit: "cover",
  },

  formatDetection: {
    telephone: false,
    date: false,
    address: false,
    email: false,
    url: false,
  },

  category: "technology",
};

export default async function LocaleLayout({
  children,
  params: paramsPromise,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {

  const params = await paramsPromise;
  const { locale } = params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);

  const headerData = await getHeaderData(locale);

  const footerData = await getFooterData();

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={await getMessages()}>
          <CraftoProvider>
            <ReactSlickProvider>
              <Header initialSolutions={[]} dynamicPages={headerData.dynamicPages} />
              {children}
              {footerData && <Footer footerData={footerData} />}
            </ReactSlickProvider>
          </CraftoProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
