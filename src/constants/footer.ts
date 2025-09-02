export const footerData = {
  content: {
    en: {
      copyright: "© 2025 Usesafe. All rights reserved.",
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
            url: "https://linkedin.com/company/usesafe",
            isActive: true,
            order: 1,
            id: "linkedin",
          },
          {
            name: "instagram" as const,
            url: "https://instagram.com/usesafe",
            isActive: true,
            order: 2,
            id: "instagram",
          },
          {
            name: "twitter" as const,
            url: "https://twitter.com/usesafe",
            isActive: true,
            order: 3,
            id: "twitter",
          },
        ],
      },
      newsletter: {
        title: "CONTACT",
        company: "DorukWell GmbH",
        email: "info@dorukwell.eu",
        phone: "Tell: +90-850-532-35-97",
        addresses: [
          {
            country: "germany",
            street: "An der Münze 1",
            city: "50668 Köln Germany",
            maps: "https://maps.google.com/?q=An+der+Münze+1,+50668+Köln+Germany",
            isActive: true,
            order: 1,
            id: "germany",
          },
        ],
      },
    },
  },
};
