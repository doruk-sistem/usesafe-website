export interface ContentWithImageTranslation {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  order?: number;
}

export interface ContentWithImageData {
  id: string;
  title: string;
  description?: string;
  image: {
    url: string;
    alt: string;
    width?: number;
    height?: number;
  };
  buttonText?: string;
  buttonLink?: string;
  order: number;
  translations?: {
    tr?: ContentWithImageTranslation;
  };
}
