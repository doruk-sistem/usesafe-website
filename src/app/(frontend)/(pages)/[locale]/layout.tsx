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
  title: "UseSafe - Digital Product Passport, Verification & Traceability",
  description: "Ensuring product safety, compliance, and sustainability through our digital product certification system.",
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
