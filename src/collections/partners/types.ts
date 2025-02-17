export interface PartnerContent {
  name: string;
  logo: {
    url: string;
    alt: string;
  };
  url?: string;
  order: number;
  active: boolean;
}

export interface PartnersData {
  partners: PartnerContent[];
}
