"use client";

import { useTranslations } from "next-intl";
import React from "react";
import { FaShieldAlt, FaLock, FaUserCheck, FaFileContract, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

interface PrivacyPolicyContentProps {
  className?: string;
}

const PrivacyPolicyContent: React.FC<PrivacyPolicyContentProps> = ({ className = "" }) => {
  const t = useTranslations("PrivacyPolicy");

  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const sections = [
    {
      id: "overview",
      title: t("sections.overview.title"),
      content: t("sections.overview.content"),
      icon: FaShieldAlt,
    },
    {
      id: "information_we_collect",
      title: t("sections.information_we_collect.title"),
      content: t("sections.information_we_collect.content"),
      icon: FaUserCheck,
      items: [
        t("sections.information_we_collect.items.personal_information"),
        t("sections.information_we_collect.items.business_information"),
        t("sections.information_we_collect.items.communication_data"),
        t("sections.information_we_collect.items.technical_data"),
      ],
    },
    {
      id: "how_we_use",
      title: t("sections.how_we_use.title"),
      content: t("sections.how_we_use.content"),
      icon: FaFileContract,
      items: [
        t("sections.how_we_use.items.communication"),
        t("sections.how_we_use.items.respond_inquiries"),
        t("sections.how_we_use.items.send_marketing"),
        t("sections.how_we_use.items.fulfill_obligations"),
        t("sections.how_we_use.items.enable_features"),
        t("sections.how_we_use.items.request_feedback"),
      ],
    },
    {
      id: "information_sharing",
      title: t("sections.information_sharing.title"),
      content: t("sections.information_sharing.content"),
      icon: FaLock,
      items: [
        t("sections.information_sharing.items.business_transfers"),
        t("sections.information_sharing.items.legal_requirements"),
        t("sections.information_sharing.items.vital_interests"),
      ],
    },
    {
      id: "data_retention",
      title: t("sections.data_retention.title"),
      content: t("sections.data_retention.content"),
      icon: FaShieldAlt,
    },
    {
      id: "your_rights",
      title: t("sections.your_rights.title"),
      content: t("sections.your_rights.content"),
      icon: FaUserCheck,
      items: [
        t("sections.your_rights.items.access"),
        t("sections.your_rights.items.rectification"),
        t("sections.your_rights.items.erasure"),
        t("sections.your_rights.items.restrict"),
        t("sections.your_rights.items.portability"),
        t("sections.your_rights.items.object"),
      ],
    },
    {
      id: "security",
      title: t("sections.security.title"),
      content: t("sections.security.content"),
      icon: FaLock,
    },
    {
      id: "cookies",
      title: t("sections.cookies.title"),
      content: t("sections.cookies.content"),
      icon: FaFileContract,
    },
    {
      id: "updates",
      title: t("sections.updates.title"),
      content: t("sections.updates.content"),
      icon: FaFileContract,
    },
  ];

  return (
    <div className={`tw-bg-gray-50 tw-py-8 tw-px-4 sm:tw-px-6 lg:tw-px-8 ${className}`}>
      <div className="tw-max-w-4xl tw-mx-auto">
        {/* Header */}
        <div className="tw-text-center tw-mb-12">
          <div className="tw-inline-flex tw-items-center tw-justify-center tw-w-20 tw-h-20 tw-bg-gray-900 tw-rounded-full tw-mb-6">
            <FaShieldAlt className="tw-text-white tw-text-3xl" />
          </div>
          <h1 className="tw-text-4xl lg:tw-text-5xl tw-font-bold tw-text-gray-900 tw-mb-4">
            {t("hero.title")}
          </h1>
          <p className="tw-text-lg tw-text-gray-600 tw-mb-6 tw-max-w-2xl tw-mx-auto">
            {t("hero.description")}
          </p>
          <div className="tw-inline-flex tw-items-center tw-px-4 tw-py-2 tw-bg-gray-100 tw-rounded-full tw-text-sm tw-text-gray-600">
            <span className="tw-font-medium">{t("hero.last_updated")}:</span>
            <span className="tw-ml-2">{currentDate}</span>
          </div>
        </div>

        {/* Content */}
        <div className="tw-bg-white tw-rounded-3xl tw-shadow-xl tw-overflow-hidden">
          <div className="tw-p-8 lg:tw-p-12">
            {sections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <div
                  key={section.id}
                  className={`tw-mb-12 ${index === sections.length - 1 ? "tw-mb-0" : ""}`}
                >
                  {/* Section Header */}
                  <div className="tw-flex tw-items-start tw-mb-6">
                    <div className="tw-flex-shrink-0 tw-mr-4">
                      <div className="tw-w-12 tw-h-12 tw-bg-gray-100 tw-rounded-xl tw-flex tw-items-center tw-justify-center">
                        <IconComponent className="tw-text-gray-700 tw-text-xl" />
                      </div>
                    </div>
                    <div className="tw-flex-grow">
                      <h2 className="tw-text-2xl tw-font-bold tw-text-gray-900 tw-mb-3">
                        {section.title}
                      </h2>
                      <p className="tw-text-gray-600 tw-leading-relaxed tw-mb-4">
                        {section.content}
                      </p>

                      {/* Section Items */}
                      {section.items && (
                        <ul className="tw-space-y-3">
                          {section.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="tw-flex tw-items-start">
                              <div className="tw-w-2 tw-h-2 tw-bg-gray-400 tw-rounded-full tw-mt-2 tw-mr-3 tw-flex-shrink-0" />
                              <span className="tw-text-gray-600 tw-leading-relaxed">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>

                  {/* Divider */}
                  {index < sections.length - 1 && (
                    <div className="tw-border-b tw-border-gray-200 tw-mt-8" />
                  )}
                </div>
              );
            })}

            {/* Contact Section */}
            <div className="tw-border-t tw-border-gray-200 tw-pt-12 tw-mt-12">
              <div className="tw-flex tw-items-start tw-mb-6">
                <div className="tw-flex-shrink-0 tw-mr-4">
                  <div className="tw-w-12 tw-h-12 tw-bg-gray-100 tw-rounded-xl tw-flex tw-items-center tw-justify-center">
                    <FaEnvelope className="tw-text-gray-700 tw-text-xl" />
                  </div>
                </div>
                <div className="tw-flex-grow">
                  <h2 className="tw-text-2xl tw-font-bold tw-text-gray-900 tw-mb-3">
                    {t("sections.contact.title")}
                  </h2>
                  <p className="tw-text-gray-600 tw-leading-relaxed tw-mb-6">
                    {t("sections.contact.content")}
                  </p>

                  <div className="tw-grid sm:tw-grid-cols-2 tw-gap-6">
                    {/* Email */}
                    <div className="tw-flex tw-items-center tw-space-x-3 tw-p-4 tw-bg-gray-50 tw-rounded-xl">
                      <div className="tw-w-10 tw-h-10 tw-bg-gray-200 tw-rounded-lg tw-flex tw-items-center tw-justify-center">
                        <FaEnvelope className="tw-text-gray-600 tw-text-sm" />
                      </div>
                      <div>
                        <div className="tw-text-sm tw-font-medium tw-text-gray-900">Email</div>
                        <a
                          href={`mailto:${t("sections.contact.email")}`}
                          className="tw-text-sm tw-text-gray-600 hover:tw-text-gray-900 tw-transition-colors"
                        >
                          {t("sections.contact.email")}
                        </a>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="tw-flex tw-items-center tw-space-x-3 tw-p-4 tw-bg-gray-50 tw-rounded-xl">
                      <div className="tw-w-10 tw-h-10 tw-bg-gray-200 tw-rounded-lg tw-flex tw-items-center tw-justify-center">
                        <FaMapMarkerAlt className="tw-text-gray-600 tw-text-sm" />
                      </div>
                      <div>
                        <div className="tw-text-sm tw-font-medium tw-text-gray-900">Address</div>
                        <p className="tw-text-sm tw-text-gray-600">
                          {t("sections.contact.address")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyContent;
