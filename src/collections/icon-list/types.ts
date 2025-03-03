export interface IconListItem {
    id?: string;
    icon: string;
    description: string;
  }

  export interface IconListData {
    id: string;
    title?: string;
    description?: string;
    sectionTitle?: string;
    items: IconListItem[];
    active: boolean;
    translations?: {
      tr?: {
        title?: string;
        description?: string;
        sectionTitle?: string;
        items?: IconListItem[];
      };
      en?: {
        title?: string;
        description?: string;
        sectionTitle?: string;
        items?: IconListItem[];
      };
    };
    createdAt: string;
    updatedAt: string;
  }
