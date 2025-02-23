import React from "react";

import { Media } from "@/components/Media";

import { ClientsBlockProps } from ".";

interface ClientsListProps extends ClientsBlockProps {
  clients: ClientsBlockProps["clients"];
}

export default function ClientsList({ clients = [] }: ClientsListProps) {
  return Array.isArray(clients) && clients.length > 0 ? (
    <div className="row row-cols-1 row-cols-md-4 row-cols-sm-2 clients-style-06">
      {clients.map((client) => (
        <div
          key={client.name}
          className="col text-center pt-5 pb-5 sm-pt-8 sm-pb-8"
        >
          <a href="#">
            <Media
              resource={client.image}
              className="h-40px md-h-30px sm-h-40px tw-object-contain"
            />
          </a>
        </div>
      ))}
    </div>
  ) : null;
}
