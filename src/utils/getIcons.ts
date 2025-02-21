import React from "react";
import { IconType } from "react-icons";
import * as Ci from "react-icons/ci";
import * as Gi from "react-icons/gi";
import * as Io from "react-icons/io5";
import * as Lu from "react-icons/lu";

const allIcons = {
  GiWorld: Gi.GiWorld,
  CiDiscount1: Ci.CiDiscount1,
  LuFootprints: Lu.LuFootprints,
  IoQrCodeOutline: Io.IoQrCodeOutline,
  GiConversation: Gi.GiConversation,
};

// Icon component'ini getir
export const getIconComponent = (iconName: string): IconType | null => {
  const Icon = allIcons[iconName as keyof typeof allIcons];
  return Icon;
};

// Icon önizleme komponenti
export const IconPreview = ({
  iconName,
}: {
  iconName: string;
}): React.ReactElement | null => {
  const Icon = getIconComponent(iconName);
  if (!Icon) return null;
  return React.createElement(Icon, { size: 24 });
};
