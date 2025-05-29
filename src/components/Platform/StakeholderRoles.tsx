import React from "react";
import { FaIndustry, FaStore, FaShoppingCart, FaGavel, FaUsers, FaTruck } from "react-icons/fa";

interface StakeholderRole {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const roles: StakeholderRole[] = [
  {
    icon: <FaIndustry className="tw-w-8 tw-h-8 tw-text-primary" />,
    title: "Manufacturers & Brand Owners",
    description:
      "Initiate certification, fulfill legal obligations, access e-commerce, and differentiate with verifiable credentials.",
  },
  {
    icon: <FaStore className="tw-w-8 tw-h-8 tw-text-primary" />,
    title: "E-commerce Sellers & Distributors",
    description:
      "Demonstrate product compliance, display UseSafe badges, and benefit from reduced regulatory risks.",
  },
  {
    icon: <FaShoppingCart className="tw-w-8 tw-h-8 tw-text-primary" />,
    title: "Marketplaces & Retailers",
    description:
      "Automate product vetting, elevate certified products, and collaborate on compliance programs.",
  },
  {
    icon: <FaGavel className="tw-w-8 tw-h-8 tw-text-primary" />,
    title: "Regulatory Authorities & Government Agencies",
    description:
      "Access real-time compliance docs, reporting, and align with digitalization goals.",
  },
  {
    icon: <FaTruck className="tw-w-8 tw-h-8 tw-text-primary" />,
    title: "Logistics & Customs Operators",
    description:
      "Digitally clear documents, identify discrepancies, and prioritize traceable products.",
  },
  {
    icon: <FaUsers className="tw-w-8 tw-h-8 tw-text-primary" />,
    title: "End Consumers",
    description:
      "Verify compliance, access lifecycle data, and make informed, sustainable choices.",
  },
];

export default function StakeholderRoles() {
  return (
    <section className="tw-py-24 tw-bg-white">
      <div className="tw-container tw-mx-auto tw-px-4 md:tw-px-6">
        <h2 className="tw-text-3xl tw-font-bold tw-text-gray-900 tw-mb-10 tw-text-center">
          Key Stakeholders in the UseSafe Ecosystem
        </h2>
        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-8">
          {roles.map((role) => (
            <div
              key={role.title}
              className="tw-bg-gray-50 tw-p-8 tw-rounded-2xl tw-shadow tw-flex tw-flex-col tw-items-center tw-text-center"
            >
              {role.icon}
              <h3 className="tw-text-xl tw-font-semibold tw-mt-4 tw-mb-2">{role.title}</h3>
              <p className="tw-text-gray-700">{role.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
