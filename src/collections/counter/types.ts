export interface CounterItem {
  description: string;
  value: number;
}

export interface CounterTranslation {
  title?: string;
  items?: CounterItem[];
}

export interface CounterData {
  id: string;
  title: string;
  items: CounterItem[];
  active: boolean;
  translations?: {
    tr?: CounterTranslation;
    en?: CounterTranslation;
  };
  createdAt: string;
  updatedAt: string;
}