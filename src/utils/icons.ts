import { IconType } from 'react-icons';
import * as Gi from 'react-icons/gi';
import * as Ci from 'react-icons/ci';
import * as Lu from 'react-icons/lu';
import * as Io from 'react-icons/io5';
import * as Fa from 'react-icons/fa';
import * as Hi from 'react-icons/hi';
import * as Md from 'react-icons/md';
import * as Bs from 'react-icons/bs';
import React from 'react';

// Tüm icon paketlerini birleştir
const allIcons = {
  ...Gi,
  ...Ci,
  ...Lu,
  ...Io,
  ...Fa,
  ...Hi,
  ...Md,
  ...Bs,
};

// Icon component'ini getir
export const getIconComponent = (iconName: string): IconType | null => {
  const Icon = allIcons[iconName as keyof typeof allIcons];
  return Icon || null;
};

// Icon önizleme komponenti
export const IconPreview = ({ iconName }: { iconName: string }): React.ReactElement | null => {
  const Icon = getIconComponent(iconName);
  if (!Icon) return null;
  return React.createElement(Icon, { size: 24 });
};