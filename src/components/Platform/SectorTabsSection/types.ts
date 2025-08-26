export interface SectorButtonProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

export interface SectorData {
  id: string;
  labelKey: string;
  contentTitleKey: string;
  featuresKeys: string[];
  imageSrc: string;
  imageAltKey: string;
}

export interface SectorTabsSectionProps {
  mainTitleKey: string;
  learnMoreButtonKey: string;
  translationNamespace: string;
  sectorsData: SectorData[];
  backgroundColor?: "white" | "gray";
}
