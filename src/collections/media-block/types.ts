export interface MediaBlockData {
  id: string;
  title: string;
  description?: string;
  media: {
    url: string;
    alt: string;
    width?: number;
    height?: number;
  };
  buttonText?: string;
  buttonLink?: string;
  active: boolean;
  translations?: {
    tr?: {
      title?: string;
      description?: string;
      buttonText?: string;
      buttonLink?: string;
    };
  };
}