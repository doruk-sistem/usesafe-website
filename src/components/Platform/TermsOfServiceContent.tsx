"use client";

import React from "react";
import {
  FaFileContract,
  FaUserCheck,
  FaShieldAlt,
  FaGavel,
  FaEnvelope,
  FaMapMarkerAlt,
  FaExclamationTriangle,
  FaCreditCard,
  FaSync,
} from "react-icons/fa";

interface TermsOfServiceContentProps {
  className?: string;
}

const TermsOfServiceContent: React.FC<TermsOfServiceContentProps> = ({ className = "" }) => {
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const sections = [
    {
      id: "overview",
      title: "Terms of Service Overview",
      content: "These Terms of Service govern your use of our digital product passport and certification services. By accessing or using our services, you agree to be bound by these terms and all applicable laws and regulations.",
      icon: FaFileContract,
    },
    {
      id: "acceptance",
      title: "Acceptance of Terms",
      content: "By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must not use our services.",
      icon: FaUserCheck,
    },
    {
      id: "services_description",
      title: "Description of Services",
      content: "We provide digital product passport services, product certification, verification, and blockchain-based traceability solutions. Our services include:",
      icon: FaShieldAlt,
      items: [
        "Digital product certification and verification",
        "QR code generation and management",
        "Blockchain-based product traceability",
        "Compliance monitoring and reporting",
        "Product authentication services",
      ],
    },
    {
      id: "user_obligations",
      title: "User Obligations",
      content: "As a user of our services, you agree to:",
      icon: FaGavel,
      items: [
        "Provide accurate and complete information",
        "Maintain the security of your account credentials",
        "Comply with all applicable laws and regulations",
        "Not engage in any fraudulent or illegal activities",
        "Respect intellectual property rights",
        "Use the services only for their intended purpose",
      ],
    },
    {
      id: "payment_terms",
      title: "Payment Terms",
      content: "Payment for our services is subject to the following terms:",
      icon: FaCreditCard,
      items: [
        "All fees are due upon service activation",
        "Prices are subject to change with 30 days notice",
        "Late payments may result in service suspension",
        "Refunds are provided according to our refund policy",
        "Subscription cancellations take effect at the end of the billing period",
      ],
    },
    {
      id: "limitations",
      title: "Service Limitations",
      content: "Our services are subject to the following limitations:",
      icon: FaExclamationTriangle,
      items: [
        "Service availability depends on system maintenance and updates",
        "We do not guarantee 100% accuracy of product information",
        "Third-party integrations may have their own limitations",
        "We are not liable for indirect or consequential damages",
        "Service interruptions may occur for maintenance purposes",
      ],
    },
    {
      id: "intellectual_property",
      title: "Intellectual Property Rights",
      content: "All content, features, and functionality of our services are owned by us and are protected by international copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written consent.",
      icon: FaShieldAlt,
    },
    {
      id: "termination",
      title: "Termination",
      content: "Either party may terminate this agreement under the following conditions:",
      icon: FaSync,
      items: [
        "You may cancel your account at any time through your dashboard",
        "We may terminate your account for violation of these terms",
        "Upon termination, your access to services will be immediately revoked",
        "Data retention policies will apply after account termination",
      ],
    },
    {
      id: "governing_law",
      title: "Governing Law",
      content: "These Terms of Service are governed by and construed in accordance with the laws of Germany. Any disputes arising from these terms will be subject to the exclusive jurisdiction of the courts in Cologne, Germany.",
      icon: FaGavel,
    },
    {
      id: "updates",
      title: "Updates to Terms",
      content: "We reserve the right to modify these Terms of Service at any time. We will notify users of any material changes via email or through our website. Continued use of our services after changes constitutes acceptance of the new terms.",
      icon: FaSync,
    },
  ];

  return (
    <div className={`tw-bg-gray-50 tw-py-8 tw-px-4 sm:tw-px-6 lg:tw-px-8 ${className}`}>
      <div className="tw-max-w-4xl tw-mx-auto">
        {/* Header */}
        <div className="tw-text-center tw-mb-12">
          <div className="tw-inline-flex tw-items-center tw-justify-center tw-w-20 tw-h-20 tw-bg-gray-900 tw-rounded-full tw-mb-6">
            <FaFileContract className="tw-text-white tw-text-3xl" />
          </div>
          <h1 className="tw-text-4xl lg:tw-text-5xl tw-font-bold tw-text-gray-900 tw-mb-4">
            Terms of Service
          </h1>
          <p className="tw-text-lg tw-text-gray-600 tw-mb-6 tw-max-w-2xl tw-mx-auto">
            Please read these terms carefully before using our digital product passport and certification services.
          </p>
          <div className="tw-inline-flex tw-items-center tw-px-4 tw-py-2 tw-bg-gray-100 tw-rounded-full tw-text-sm tw-text-gray-600">
            <span className="tw-font-medium">Last Updated:</span>
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
                    Contact Us
                  </h2>
                  <p className="tw-text-gray-600 tw-leading-relaxed tw-mb-6">
                    If you have any questions about these Terms of Service, please contact us using the information below.
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
                          href="mailto:info@dorukwell.eu"
                          className="tw-text-sm tw-text-gray-600 hover:tw-text-gray-900 tw-transition-colors"
                        >
                          info@dorukwell.eu
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
                          DorukWell GmbH, An der Münze 1, 50668 Köln, Germany
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

export default TermsOfServiceContent;
