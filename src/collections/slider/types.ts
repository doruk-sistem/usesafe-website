export interface SlideData {
    image: {
      url: string;
      alt: string;
    };
    title: string;
    description: string;
    buttonText?: string;
    buttonLink?: string;
  }
  
  export interface SliderData {
    title: string;
    slides: SlideData[];
    translations?: {
      tr: {
        slides: Omit<SlideData, 'image'>[];
      };
    };
  }