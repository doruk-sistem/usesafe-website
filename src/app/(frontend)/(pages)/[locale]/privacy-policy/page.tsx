import React from "react";

import Footer from "@/app/(frontend)/_components/footer";
import Header from "@/app/(frontend)/_components/header";
import { initPayload } from "@/app/api/utils/getPayload";
import type { PrivacyPolicyData } from "@/collections/privacy-policy";

type Props = {
  params: {
    locale: string
  }
}

export default async function PrivacyPolicy(props: Props) {
  try {
    const locale = props.params.locale;

    console.log("Attempting to fetch privacy policy...");

    const payload = await initPayload();

    const response = await payload.find({
      collection: "privacy-policy",
      limit: 1,
    });

    console.log("API Response:", response);

    if (!response.docs || response.docs.length === 0) {
      console.log("No privacy policy documents found");
      return (
        <>
          <Header />
          <main>
            <div className="container tw-py-16">
              <div className="tw-text-center">
                <h1>No Content Available</h1>
                <p>Privacy Policy content has not been added yet.</p>
              </div>
            </div>
          </main>
          <Footer />
        </>
      );
    }

    const privacyData = response.docs[0] as unknown as PrivacyPolicyData;

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
                    <h2 className="tw-text-xl tw-font-semibold tw-mb-3 tw-text-black">
                      {legalDisclaimer.title}
                    </h2>
                    <p className="tw-text-gray-700">
                      {legalDisclaimer.content}
                    </p>

                    <h2 className="tw-text-xl tw-font-semibold tw-mb-3 tw-mt-4 tw-text-black">
                      {basics.title}
                    </h2>
                    <p className="tw-text-gray-700">
                      {basics.content}
                    </p>

                    <h2 className="tw-text-xl tw-font-semibold tw-mb-3 tw-mt-4 tw-text-black">
                      {inclusion.title}
                    </h2>
                    <p className="tw-text-gray-700">
                      {inclusion.content}
                    </p>
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
    console.error("Detailed error:", error);
    return (
      <>
        <Header />
        <main>
          <div className="container tw-py-16">
            <div className="tw-text-center">
              <h1>Error</h1>
              <p>Could not load Privacy Policy content. Please try again later.</p>
              {process.env.NODE_ENV === "development" && (
                <pre className="tw-mt-4 tw-p-4 tw-bg-red-50 tw-text-red-600">
                  {JSON.stringify(error, null, 2)}
                </pre>
              )}
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}
