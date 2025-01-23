import Image from "next/image";
import React from "react";
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
            <Image
              src={client.imageSrc}
              className="h-40px md-h-30px sm-h-40px tw-object-contain"
              alt={client.name}
              width={150}
              height={150}
            />
          </a>
        </div>
      ))}
    </div>
  ) : null;
}
