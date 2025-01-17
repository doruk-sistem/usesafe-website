import Image from "next/image";
import React from "react";

interface ClientsBlockProps {
  title?: string;
  clients: {
    name: string;
    imageSrc: string;
  }[];
}

export default function ClientsBlock({
  title,
  clients = [],
}: ClientsBlockProps) {
  return (
    <section
      className="ps-13 pe-13 lg-ps-2 lg-pe-2 background-no-repeat background-position-center-top"
      style={{
        backgroundImage:
          "url('crafto/images/demo-it-business-testimonial-bg.png')",
      }}
    >
      <div className="tw-container">
        {typeof title === "string" && !!title && (
          <div
            className="tw-text-center tw-mb-5"
            data-anime='{ "translate": [0, 0], "opacity": [0,1], "duration": 600, "delay": 100, "staggervalue": 150, "easing": "easeOutQuad" }'
          >
            <h3 className="tw-text-black tw-font-bold primary-font tw-mb-0">
              {title}
            </h3>
          </div>
        )}
        {Array.isArray(clients) && clients.length > 0 && (
          <div
            className="row row-cols-1 row-cols-md-4 row-cols-sm-2 clients-style-06"
            data-anime='{ "el": "childs", "scale": [0,1], "opacity": [0,1], "duration": 300, "delay": 0, "staggervalue": 200, "easing": "easeOutQuad" }'
          >
            {clients.map((client) => (
              <div
                key={client.name}
                className="col client-box text-center pt-5 pb-5 sm-pt-8 sm-pb-8"
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
        )}
      </div>
    </section>
  );
}
