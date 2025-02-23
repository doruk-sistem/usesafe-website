export interface MediaBlockTranslation {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

export interface MediaBlockData {
  id: number;
  title: string;
  description: string;
  media: {
    id: number;
    url: string;
    alt: string;
    width?: number;
    height?: number;
  };
  buttonText: string;
  buttonLink: string;
  active: boolean;
  translations?: {
    tr?: MediaBlockTranslation;
    en?: MediaBlockTranslation;
  };
  createdAt: string;
  updatedAt: string;
}
