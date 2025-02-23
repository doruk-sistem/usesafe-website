export interface AccordionItem {
    title: string;
    description: string;
  }

  export interface AccordionData {
    id: string;
    sectionTitle: string;
    title: string;
    description: string;
    image: {
        url: string;
        alt: string;
      };
    items: AccordionItem[];
    active: boolean;
    translations?: {
      tr?: {
        sectionTitle?: string;
        title?: string;
        description?: string;
        items?: AccordionItem[];
      };
      en?: {
        sectionTitle?: string;
        title?: string;
        description?: string;
        items?: AccordionItem[];
      };
    };
    createdAt: string;
    updatedAt: string;
  }
