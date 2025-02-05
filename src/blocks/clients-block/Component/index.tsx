import React from "react";

import ClientsSlick from "./clients-slick";
import ClientsList from "./clients-list";

export interface ClientsBlockProps {
  clients: {
    name: string;
    imageSrc: string;
  }[];
  type?: "list" | "slick";
  /**
   * Only used for slick type
   * @default "white"
   */
  gradientColor?: string;
}

const clientsComponents: Record<NonNullable<ClientsBlockProps["type"]>, any> = {
  list: ClientsList,
  slick: ClientsSlick,
};

export function ClientsBlock({
  clients = [],
  type = "list",
  gradientColor = "white",
}: ClientsBlockProps) {
  const Component = clientsComponents[type];

  if (!Component) {
    return null;
  }

  return <Component clients={clients} gradientColor={gradientColor} />;
}
