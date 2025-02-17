export interface CounterItem {
    description: string;
    value: number;
  }
  
  export interface CounterData {
    id: string;
    title: string;
    items: CounterItem[];
    active: boolean;
    translations?: {
      tr?: {
        title?: string;
        items?: CounterItem[];
      };
    };
  }