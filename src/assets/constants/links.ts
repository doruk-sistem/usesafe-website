export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/company/dorukwell",
  facebook: "https://www.facebook.com/doruksistem",
  instagram: "https://www.instagram.com/doruksistem",
  twitter: "https://x.com/doruksistem",
} as const;

export type DorukGroupLocation = {
  id: string;
  label: string;
  maps?: string;
  linkable: boolean;
  order: number;
};

export const DORUK_GROUP_LOCATIONS: readonly DorukGroupLocation[] = [
  {
    id: "turkey",
    label: "Doruksistem AS – İstanbul TÜRKİYE",
    maps:
      "https://maps.google.com/?q=Eğitim,+Fahrettin+Kerim+Gökay+Cd+No:71+Kat:9+Daire:+57,+34722+Kadıköy+İstanbul",
    linkable: true,
    order: 1,
  },
  {
    id: "germany",
    label: "DorukWell GmbH – Köln - GERMANY",
    maps: "https://maps.google.com/?q=An+der+Münze+1,+50668+Cologne,+Germany",
    linkable: true,
    order: 2,
  },
  {
    id: "uk",
    label: "DorukWell Ltd – London – UK",
    maps:
      "https://maps.google.com/?q=71-75+Shelton+Street,+Covent+Garden,+London,+United+Kingdom,+WC2H+9JQ",
    linkable: true,
    order: 3,
  },
  {
    id: "usa",
    label: "DorukWell LLC – Boston – USA",
    maps:
      "https://maps.google.com/?q=82+Wendell+Ave+Ste+100,+Pittsfield,+MA+01201,+USA",
    linkable: true,
    order: 4,
  },
];

export const CONTACT_INFO = {
  groupName: "DORUK GROUP CONTACT",
  emails: [
    "info@doruksistem.com.tr",
    "info@dorukwell.eu",
    "info@usesafe.com",
  ] as const,
  email: "info@usesafe.com",
  phone: "+90 (850) 532 3597",
  phoneTel: "+908505323597",
} as const;
