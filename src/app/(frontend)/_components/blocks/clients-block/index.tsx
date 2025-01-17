import React from "react";

import ClientsSlick from "./clients-slick";
import ClientsList from "./clients-list";
import Section from "../../section";

export interface ClientsBlockProps {
  clients: {
    name: string;
    imageSrc: string;
  }[];
  type?: "list" | "slick";
  footer?: React.ReactNode;
}

const clientsComponents: Record<NonNullable<ClientsBlockProps["type"]>, any> = {
  list: ClientsList,
  slick: ClientsSlick,
};

export default function ClientsBlock({
  clients = [],
  type = "list",
  footer,
}: ClientsBlockProps) {
  const Component = clientsComponents[type];

  if (!Component) {
    return null;
  }

  return (
    <Section footer={footer}>
      <Component clients={clients} />
    </Section>
  );
}
