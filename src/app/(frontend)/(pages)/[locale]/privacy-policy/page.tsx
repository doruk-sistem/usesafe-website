import { Metadata } from "next";
import React from "react";

import ErrorComponent from "@/app/(frontend)/_components/ErrorComponent";
import Footer from "@/app/(frontend)/_components/footer";
import Header from "@/app/(frontend)/_components/header";
import { initPayload } from "@/app/api/utils/getPayload";
import type { PrivacyPolicyData } from "@/collections/privacy-policy";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

type PageProps = {
  params: Promise<{ locale: string }>;
};

const PrivacyPolicy = async ({ params }: PageProps) => {
  try {
    const { locale } = await params;
    const payload = await initPayload();

    const response = await payload.find({
      collection: "privacy-policy",
      limit: 1,
    });

    if (!response.docs || response.docs.length === 0) {
      return <ErrorComponent message="Privacy Policy content has not been added yet." />;
    }

    const privacyData = response.docs[0] as PrivacyPolicyData;

    const content = locale === "tr" && privacyData.translations?.tr
      ? privacyData.translations.tr
      : privacyData;

    const { title, sections } = content;
    const { legalDisclaimer, basics, inclusion } = sections;

    return (
      <>
        <Header />
        <main>
          <div className="container tw-py-16">
            <div className="row justify-content-center">
              <div className="col-12 col-xl-9 col-lg-10">
                <div className="tw-bg-white tw-p-8 md:tw-p-12">
                  <h1 className="tw-text-4xl md:tw-text-5xl tw-font-bold tw-mb-8 tw-text-black">
                    {title}
                  </h1>

                  <div>
                    {[
                      { section: legalDisclaimer, title: "Legal Disclaimer" },
                      { section: basics, title: "Basics" },
                      { section: inclusion, title: "Inclusion" },
                    ].map(({ section, title }, index) => (
                      <div key={index}>
                        <h2 className="tw-text-xl tw-font-semibold tw-mb-3 tw-text-black">
                          {section?.title || title}
                        </h2>
                        <p className="tw-text-gray-700">{section?.content || "No content available."}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Privacy Policy error:", error);

    return <ErrorComponent message="Could not load Privacy Policy content. Please try again later." />;
  }
};

export default PrivacyPolicy;
