import { CONTACT_INFO, DORUK_GROUP_LOCATIONS } from "@/assets/constants/links";
import { SOCIAL_PROFILES } from "@/constants/site";

export const footerData = {
  content: {
    en: {
      copyright: `© ${new Date().getFullYear()} UseSafe. All rights reserved.`,
      company: {
        title: "Company",
        links: [
          {
            text: "DPP in ESPR",
            url: "/platform/frameworks/dpp-in-espr",
            isActive: true,
            order: 1,
            id: "dpp-in-espr",
          },
          {
            text: "Textile Passport",
            url: "/platform/frameworks/textile-passport",
            isActive: true,
            order: 2,
            id: "textile-passport",
          },
        ],
      },
      legal: {
        title: "LEGAL",
        terms: {
          text: "Terms",
          link: "/terms-of-service",
        },
        privacy: {
          text: "Privacy",
          link: "/privacy-policy",
        },
      },
      social: {
        title: "SOCIAL MEDIA",
        platforms: [
          {
            name: "linkedin" as const,
            url: SOCIAL_PROFILES.linkedin,
            isActive: true,
            order: 1,
            id: "linkedin",
          },
          {
            name: "instagram" as const,
            url: SOCIAL_PROFILES.instagram,
            isActive: true,
            order: 2,
            id: "instagram",
          },
          {
            name: "twitter" as const,
            url: SOCIAL_PROFILES.x,
            isActive: true,
            order: 3,
            id: "twitter",
          },
        ],
      },
      newsletter: {
        title: CONTACT_INFO.groupName,
        emails: [...CONTACT_INFO.emails],
        phone: CONTACT_INFO.phone,
        phoneTel: CONTACT_INFO.phoneTel,
        addresses: DORUK_GROUP_LOCATIONS.map((location) => ({
          country: location.id,
          label: location.label,
          maps: location.maps,
          linkable: location.linkable,
          isActive: true,
          order: location.order,
          id: location.id,
        })),
      },
    },
  },
};
