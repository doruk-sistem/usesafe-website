export const footerData = {
  content: {
    en: {
      copyright: "© 2025 by UseSafe.",
      company: {
        title: "COMPANY",
        links: [
          {
            text: "USESAFE",
            url: "/usesafe",
            isActive: true,
            order: 1,
            id: "usesafe",
          },
          {
            text: "DIGITAL TWINS",
            url: "/digital-twins",
            isActive: true,
            order: 2,
            id: "digital-twins",
          },
        ],
      },
      legal: {
        title: "LEGAL",
        terms: {
          text: "Terms & Conditions",
          link: "/terms-conditions",
        },
        privacy: {
          text: "Privacy Policy",
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
            name: "facebook" as const,
            url: "https://facebook.com/usesafe",
            isActive: true,
            order: 2,
            id: "facebook",
          },
          {
            name: "instagram" as const,
            url: "https://instagram.com/usesafe",
            isActive: true,
            order: 3,
            id: "instagram",
          },
          {
            name: "twitter" as const,
            url: "https://twitter.com/usesafe",
            isActive: true,
            order: 4,
            id: "twitter",
          },
        ],
      },
      newsletter: {
        title: "CONTACT",
        company: "DORUKSISTEM",
        email: "info@usesafe.net",
        phone: "+90-850-532-35-97",
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
          {
            country: "turkey",
            street: "Fahrettin Kerim Gökay Cd. 74/2",
            city: "34730 Kadikoy Turkiye",
            maps: "https://maps.google.com/?q=Fahrettin+Kerim+Gökay+Cd.+74/2,+34730+Kadikoy+Turkey",
            isActive: true,
            order: 2,
            id: "turkey",
          },
        ],
      },
    },
  },
};
