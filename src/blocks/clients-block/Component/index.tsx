import React from "react";

import ClientsSlick from "./clients-slick";
import ClientsList from "./clients-list";

export interface ClientsBlockProps {
  clients: {
    name: string;
    imageSrc: string;
  }[];
  type?: "list" | "slick";
}

const clientsComponents: Record<NonNullable<ClientsBlockProps["type"]>, any> = {
  list: ClientsList,
  slick: ClientsSlick,
};

export function ClientsBlock({
  clients = [],
  type = "list",
}: ClientsBlockProps) {
  const Component = clientsComponents[type];

  if (!Component) {
    return null;
  }

  return <Component clients={clients} />;
}
