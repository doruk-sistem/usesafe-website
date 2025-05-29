import React from "react";
import { FaRobot, FaIdBadge, FaLink, FaGlobe, FaDatabase, FaChartBar, FaArchive, FaTags, FaSyncAlt } from "react-icons/fa";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <FaRobot className="tw-w-8 tw-h-8 tw-text-primary" />,
    title: "AI-Driven Compliance Engine",
    description:
      "Evaluates product conformity with regulations (EU GPSR, ESPR, MoCRA, KKKDIK, etc.), analyzes attributes, labeling, and documentation.",
  },
  {
    icon: <FaIdBadge className="tw-w-8 tw-h-8 tw-text-primary" />,
    title: "Digital Product Passport (DPP)",
    description:
      "Assigns a Digital Product Passport to each product, storing material, compliance, and lifecycle data.",
  },
  {
    icon: <FaLink className="tw-w-8 tw-h-8 tw-text-primary" />,
    title: "Blockchain-Based Traceability",
    description:
      "Ensures secure, tamper-proof documentation of the product lifecycle using blockchain technology.",
  },
  {
    icon: <FaGlobe className="tw-w-8 tw-h-8 tw-text-primary" />,
    title: "API & Platform Integration",
    description:
      "Seamless integration with e-commerce, customs, ERP, and logistics systems via APIs.",
  },
  {
    icon: <FaGlobe className="tw-w-8 tw-h-8 tw-text-primary" />,
    title: "Multi-Region, Multi-Language Support",
    description:
      "Supports compliance management across global regulatory environments and user profiles.",
  },
  {
    icon: <FaSyncAlt className="tw-w-8 tw-h-8 tw-text-primary" />,
    title: "Post-Purchase Product Monitoring",
    description:
      "Enables monitoring and engagement after sale, including recalls, safety alerts, and improvement suggestions.",
  },
  {
    icon: <FaDatabase className="tw-w-8 tw-h-8 tw-text-primary" />,
    title: "Lifecycle Data Repository",
    description:
      "Centralizes all product data (materials, design, manufacturing, usage, disposal) for advanced reporting and ESG disclosures.",
  },
  {
    icon: <FaArchive className="tw-w-8 tw-h-8 tw-text-primary" />,
    title: "Compliance Documentation Archive",
    description:
      "Digital archive for all compliance documents, accessible to authorized users and inspectors.",
  },
  {
    icon: <FaTags className="tw-w-8 tw-h-8 tw-text-primary" />,
    title: "Labeling & Certification Automation",
    description:
      "Automatically generates compliant product labels and digital certificates based on uploaded data.",
  },
  {
    icon: <FaChartBar className="tw-w-8 tw-h-8 tw-text-primary" />,
    title: "Custom Stakeholder Dashboards",
    description:
      "Personalized dashboards for each user type, providing real-time updates and compliance KPIs.",
  },
];

export default function TechnicalFeatures() {
  return (
    <section className="tw-py-24 tw-bg-gradient-to-br tw-from-gray-50 tw-to-blue-50">
      <div className="tw-container tw-mx-auto tw-px-4 md:tw-px-6">
        <h2 className="tw-text-3xl tw-font-bold tw-text-gray-900 tw-mb-10 tw-text-center">
          Technical Features of UseSafe
        </h2>
        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="tw-bg-white tw-p-8 tw-rounded-2xl tw-shadow tw-flex tw-flex-col tw-items-center tw-text-center"
            >
              {feature.icon}
              <h3 className="tw-text-xl tw-font-semibold tw-mt-4 tw-mb-2">{feature.title}</h3>
              <p className="tw-text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
