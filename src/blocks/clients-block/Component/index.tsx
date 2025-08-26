import React from "react";

import ClientsList from "./clients-list";
import ClientsSlick from "./clients-slick";

export interface ClientsBlockProps {
  clients: {
    name: string;
    image: any;
  }[];
  type?: "list" | "slick";
  /**
   * Only used for slick type
   * @default "white"
   */
  gradientColor?: string;
}

const clientsComponents: Record<NonNullable<ClientsBlockProps["type"]>, React.ComponentType<ClientsBlockProps>> = {
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
