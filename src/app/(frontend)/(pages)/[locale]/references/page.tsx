"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "@/app/(frontend)/_components/button";
import { PageTitle } from "@/app/(frontend)/_components/page-title"; // ✅ Hero bileşeni

interface Reference {
  id: string;
  title: string;
  image?: { url?: string };
}

export default function ReferencesPage() {
  const [references, setReferences] = useState<Reference[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { locale } = useParams();

  useEffect(() => {
    const fetchReferences = async () => {
      try {
        setIsLoading(true);

        const response = await fetch(
          "/api/references?where[status][equals]=published&depth=2",
          {
            headers: { "Accept-Language": locale as string },
          },
        );

        if (!response.ok) throw new Error("Referans verileri çekilemedi");

        const data = await response.json();
        setReferences(data.docs || []);
      } catch (error) {
        console.error("Referansları çekerken hata oluştu:", error);
        setReferences([]); // Hata alındığında boş array dön
      } finally {
        setIsLoading(false);
      }
    };

    fetchReferences();
  }, [locale]);

  return (
    <div className="tw-w-full tw-min-h-screen tw-bg-white tw-py-16">

      {/* Hero (PageTitle) */}
      <PageTitle
        title={locale === "tr" ? "Referanslarımız" : "Our References"}
        backgroundImage="/images/referencehero.png"
      />

      <div className="tw-container tw-mx-auto tw-mt-10">

        {/* İçerik Alanı */}
        <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-3 tw-gap-10">

          {/* Referans Kartları */}
          <div className="tw-grid tw-grid-cols-2 sm:tw-grid-cols-3 tw-gap-4 lg:tw-col-span-2">
            {isLoading ? (
              <p className="tw-text-center tw-text-gray-500">Yükleniyor...</p>
            ) : references.length === 0 ? (
              <p className="tw-text-center tw-text-gray-500">
                {locale === "tr" ? "Henüz eklenen bir referans yok." : "No references added yet."}
              </p>
            ) : (
              references.map((ref) => (
                <div
                  key={ref.id}
                  className="tw-shadow-md tw-rounded-lg tw-overflow-hidden tw-bg-white tw-flex tw-items-center tw-justify-center tw-p-4 tw-h-32 hover:tw-shadow-xl tw-transition-shadow"
                >
                  {ref.image?.url ? (
                    <Image
                      src={ref.image.url}
                      alt={ref.title}
                      width={120}
                      height={80}
                      className="tw-object-contain tw-w-auto tw-h-20"
                    />
                  ) : (
                    <p className="tw-text-gray-500">{locale === "tr" ? "Görsel bulunamadı" : "Image not available"}</p>
                  )}
                </div>
              ))
            )}
          </div>

          {/* Form Alanı */}
          <div className="tw-bg-white tw-shadow-lg tw-rounded-lg tw-p-8">
            <h2 className="tw-text-2xl tw-font-bold tw-mb-6">
              {locale === "tr" ? "Bize Ulaşın" : "Contact Us"}
            </h2>
            <form className="tw-space-y-4">
              <div>
                <label className="tw-text-sm tw-font-medium tw-text-gray-700">
                  {locale === "tr" ? "Adınız" : "Your Name"}
                </label>
                <input
                  type="text"
                  className="tw-w-full tw-p-2 tw-border tw-border-gray-300 tw-rounded-lg"
                  placeholder={locale === "tr" ? "Adınızı girin" : "Enter your name"}
                />
              </div>

              <div>
                <label className="tw-text-sm tw-font-medium tw-text-gray-700">
                  {locale === "tr" ? "E-posta Adresiniz" : "Your Email"}
                </label>
                <input
                  type="email"
                  className="tw-w-full tw-p-2 tw-border tw-border-gray-300 tw-rounded-lg"
                  placeholder={locale === "tr" ? "E-posta adresinizi girin" : "Enter your email"}
                />
              </div>

              <div>
                <label className="tw-text-sm tw-font-medium tw-text-gray-700">
                  {locale === "tr" ? "Mesajınız" : "Your Message"}
                </label>
                <textarea
                  className="tw-w-full tw-p-2 tw-border tw-border-gray-300 tw-rounded-lg"
                  rows={4}
                  placeholder={locale === "tr" ? "Mesajınızı yazın..." : "Write your message..."}
                ></textarea>
              </div>

              {/* Buton */}
              <Button variant="default" size="lg" className="tw-w-full">
                {locale === "tr" ? "Gönder" : "Send"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
