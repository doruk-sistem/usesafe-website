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
  imagePosition?: 'left' | 'right';
  showCounters?: boolean;
  counters?: {
    products?: number;
    partners?: number;
  };
  buttonText?: string;
  translations?: {
    tr?: {
      title?: string;
      description?: string;
      buttonText?: string;
    };
  };
  active: boolean;
}