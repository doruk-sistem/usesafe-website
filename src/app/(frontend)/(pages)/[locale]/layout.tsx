import type { Metadata } from "next";
// eslint-disable-next-line camelcase
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";

import CraftoProvider from "@/frontend/_providers/CraftoProvider";
import ReactSlickProvider from "@/frontend/_providers/ReactSlickProvider";
import { routing } from "@/i18n/routing";

import "@/frontend/globals.css";

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

  // Client tarafına mesajları gönder
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <CraftoProvider>
            <ReactSlickProvider>{children}</ReactSlickProvider>
          </CraftoProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
