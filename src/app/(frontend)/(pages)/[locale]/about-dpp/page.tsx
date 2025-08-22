"use client";

import React from "react";

import Image from "next/image";

export default function AboutDppPage() {
  return (
    <div className="tw-bg-gray-50">
      {/* Banner Section */}
      <div className="tw-relative tw-h-[300px] tw-md:h-[300px] tw-overflow-hidden">
        <Image
          src="/images/digital-twins1.webp"
          alt="About DPP Banner"
          fill
          className="tw-object-cover"
          priority
        />
        {/* Light gray overlay for better text readability */}
        <div className="tw-absolute tw-inset-0 tw-bg-gray-100/20"></div>
        <div className="tw-absolute tw-inset-0 tw-flex tw-items-center tw-justify-center">
          <div className="tw-text-center tw-text-white">
            <h1 className="tw-text-5xl tw-md:text-6xl tw-font-bold tw-mb-4 tw-shadow-lg">
              About DPP
            </h1>
          </div>
        </div>
      </div>
      
      <div className="tw-py-16">
      <div className="tw-container">
        <div className="tw-max-w-5xl tw-mx-auto">
          <div className="tw-bg-gray-50 tw-p-8">
            {/* Hero Section */}
            <div className="tw-mb-12">
              <h1 className="tw-text-5xl tw-font-bold tw-text-gray-900 tw-mb-6">
                Digital Product Passport (DPP): Key to a Transparent and Sustainable Future
              </h1>
              <p className="tw-text-lg tw-text-gray-700 tw-leading-relaxed tw-mb-8">
                Today's consumers are no longer just looking at price and quality. They want to know where the products they buy come from, how they are produced, and their environmental impact. Similarly, businesses need transparent information to manage complex supply chains, meet sustainability goals, and comply with increasing regulations. Digital Product Passports (DPP) offer an innovative solution to meet these needs. DPPs ensure transparency and traceability throughout the product's lifecycle, bringing significant benefits for both consumers and producers.
              </p>
              
              {/* Hero Image */}
              <div className="tw-flex tw-justify-center tw-mb-8">
                <div className="tw-relative tw-w-full tw-max-w-4xl tw-h-[640px] tw-md:h-[768px]">
                  <Image
                    src="/images/dpp_usesafe_doruksistem-1.webp"
                    alt="Digital Product Passport (DPP) - UseSafe"
                    fill
                    className="tw-object-cover tw-rounded-lg"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* What is DPP Section */}
            <div className="tw-mb-12">
              <h2 className="tw-text-4xl tw-font-bold tw-text-gray-900 tw-mb-6">
                What is a Digital Product Passport (DPP) and How Does It Work?
              </h2>
              <p className="tw-text-lg tw-text-gray-700 tw-leading-relaxed tw-mb-6">
                A Digital Product Passport is like a digital identity card that encompasses all the information about a product throughout its lifecycle. It includes data ranging from raw material sourcing to production processes, carbon footprint, and recycling information. This information is often linked to a QR code or barcode placed on the physical product, making it easily accessible through smartphones or other devices. Thus, all stakeholders can instantly see all the relevant information about the product and be assured of its transparency.
              </p>
              <p className="tw-text-lg tw-text-gray-700 tw-leading-relaxed">
                Digital Product Passports allow for the digital tracking of a product from its inception, starting with raw material sourcing, through production processes, distribution, to reaching the end-user, and even recycling. Thanks to these passports, products can be transparently tracked throughout their lifecycle, and this information is continuously updated. This is highly valuable in minimizing the environmental impact of products and building consumer trust.
              </p>
            </div>

            {/* How DPPs Work Section */}
            <div className="tw-mb-12">
              <h2 className="tw-text-4xl tw-font-bold tw-text-gray-900 tw-mb-6">
                How DPPs Work
              </h2>
              <div className="tw-grid tw-grid-cols-1 tw-md:grid-cols-3 tw-gap-4 tw-mb-6">
                <div className="tw-p-4">
                  <h3 className="tw-text-xl tw-font-semibold tw-text-gray-900 tw-mb-3">
                    Data Collection
                  </h3>
                  <p className="tw-text-gray-700 tw-leading-relaxed">
                    To make DPPs functional, data from raw material suppliers, producers, logistics companies, retailers, and recycling centers must be collected throughout the entire product lifecycle. The data collected at each stage is thoroughly analyzed and documented, providing transparency on every environmental impact and improvement made during the production process.
                  </p>
                </div>
                <div className="tw-p-4">
                  <h3 className="tw-text-xl tw-font-semibold tw-text-gray-900 tw-mb-3">
                    Data Storage and Access
                  </h3>
                  <p className="tw-text-gray-700 tw-leading-relaxed">
                    This data is stored on a secure blockchain infrastructure, preventing the alteration or manipulation of information. Since blockchain is a decentralized system, it ensures the reliability and integrity of data. Additionally, the information stored on the blockchain is traceable and can be shared transparently with stakeholders.
                  </p>
                </div>
                <div className="tw-p-4">
                  <h3 className="tw-text-xl tw-font-semibold tw-text-gray-900 tw-mb-3">
                    Accessibility
                  </h3>
                  <p className="tw-text-gray-700 tw-leading-relaxed">
                    All this information is presented to the consumer via a QR code on the product. Scanning this code with a smartphone reveals detailed product information, from the production process to the recycling phase. This allows consumers to learn the story behind the products they purchase and make informed buying decisions.
                  </p>
                </div>
              </div>
              <p className="tw-text-lg tw-text-gray-700 tw-leading-relaxed">
                The Digital Product Passport not only enhances supply chain efficiency but also greatly contributes to the achievement of sustainability goals. Tracking a product's lifecycle helps increase recycling rates, minimize energy and resource usage, and plan the necessary steps for improvement.
              </p>
            </div>

            {/* Advantages Section */}
            <div className="tw-mb-12">
              <h2 className="tw-text-4xl tw-font-bold tw-text-gray-900 tw-mb-8">
                Advantages of DPPs for Consumers and Businesses
              </h2>
              
              {/* Consumer Advantages */}
              <div className="tw-mb-8">
                <h3 className="tw-text-2xl tw-font-semibold tw-text-gray-900 tw-mb-6">
                  Advantages for Consumers
                </h3>
                <div className="tw-grid tw-grid-cols-1 tw-md:grid-cols-2 tw-gap-4">
                  <div className="tw-p-4">
                    <h4 className="tw-text-lg tw-font-semibold tw-text-gray-900 tw-mb-2">
                      Informed Purchase Decisions
                    </h4>
                    <p className="tw-text-gray-700 tw-leading-relaxed">
                      Consumers can access information about the environmental impact of products, ethical production standards, and recycling options, enabling them to make more informed choices. This plays a crucial role in reducing consumption-based environmental impacts.
                    </p>
                  </div>
                  <div className="tw-p-4">
                    <h4 className="tw-text-lg tw-font-semibold tw-text-gray-900 tw-mb-2">
                      Trust and Transparency
                    </h4>
                    <p className="tw-text-gray-700 tw-leading-relaxed">
                      DPPs allow consumers to verify the authenticity of the products they purchase, protecting them from counterfeits. They can also see the conditions under which the product was produced, the sources of raw materials used, and the environmental impacts of these processes.
                    </p>
                  </div>
                  <div className="tw-p-4">
                    <h4 className="tw-text-lg tw-font-semibold tw-text-gray-900 tw-mb-2">
                      Enhanced Product Experience
                    </h4>
                    <p className="tw-text-gray-700 tw-leading-relaxed">
                      DPPs provide instant access to user manuals, maintenance instructions, and repair information, enhancing the product experience. Consumers can also obtain information about potential repairs and maintenance throughout the product's lifespan, which contributes to extending the product's life.
                    </p>
                  </div>
                  <div className="tw-p-4">
                    <h4 className="tw-text-lg tw-font-semibold tw-text-gray-900 tw-mb-2">
                      Personalized Product Information
                    </h4>
                    <p className="tw-text-gray-700 tw-leading-relaxed">
                      Consumers can access more detailed and personalized information about products. For instance, for food products, details such as production date, expiration date, and the origin of the materials used can be accessed through DPPs.
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Advantages */}
              <div>
                <h3 className="tw-text-2xl tw-font-semibold tw-text-gray-900 tw-mb-6">
                  Advantages for Businesses
                </h3>
                <div className="tw-grid tw-grid-cols-1 tw-md:grid-cols-2 tw-gap-4">
                  <div className="tw-p-4">
                    <h4 className="tw-text-lg tw-font-semibold tw-text-gray-900 tw-mb-2">
                      Achieving Sustainability Goals
                    </h4>
                    <p className="tw-text-gray-700 tw-leading-relaxed">
                      Businesses can monitor the environmental impacts of their products and take concrete steps to reduce them. DPPs help ensure the transparency and reporting of these processes. Thus, businesses can achieve their sustainability goals while also meeting regulatory requirements.
                    </p>
                  </div>
                  <div className="tw-p-4">
                    <h4 className="tw-text-lg tw-font-semibold tw-text-gray-900 tw-mb-2">
                      Supply Chain Efficiency
                    </h4>
                    <p className="tw-text-gray-700 tw-leading-relaxed">
                      Every movement of a product within the supply chain can be tracked, allowing for optimized inventory management. This leads to reduced costs and more efficient production processes. Additionally, recycling processes can be managed more effectively.
                    </p>
                  </div>
                  <div className="tw-p-4">
                    <h4 className="tw-text-lg tw-font-semibold tw-text-gray-900 tw-mb-2">
                      New Business Models
                    </h4>
                    <p className="tw-text-gray-700 tw-leading-relaxed">
                      DPPs enable the development of new business models, such as product-service systems, rental models, and recycling programs. For instance, using DPPs for rentable products provides information on the product's usage history and condition. Such models help businesses build longer-term and ongoing relationships with customers.
                    </p>
                  </div>
                  <div className="tw-p-4">
                    <h4 className="tw-text-lg tw-font-semibold tw-text-gray-900 tw-mb-2">
                      Competitive Advantage
                    </h4>
                    <p className="tw-text-gray-700 tw-leading-relaxed">
                      Companies that lead in sustainability and transparency gain consumer trust, enhance brand reputation, and stay ahead of competitors. The transparency and verification mechanisms offered by DPPs also help brands increase customer loyalty and satisfaction.
                    </p>
                  </div>
                  <div className="tw-p-4">
                    <h4 className="tw-text-lg tw-font-semibold tw-text-gray-900 tw-mb-2">
                      Marketing and Customer Engagement
                    </h4>
                    <p className="tw-text-gray-700 tw-leading-relaxed">
                      By providing more information about products, businesses can enhance customer engagement through DPPs. This can be used as a marketing strategy that adds value to customers and strengthens brand reputation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* EU Compliance Section */}
            <div className="tw-mb-12">
              <h2 className="tw-text-4xl tw-font-bold tw-text-gray-900 tw-mb-6">
                Compliance of DPPs with European Union (EU) Regulations
              </h2>
              <div className="tw-space-y-4">
                <div className="tw-p-4">
                  <h3 className="tw-text-xl tw-font-semibold tw-text-gray-900 tw-mb-3">
                    Ecodesign Regulation for Sustainable Products (ESPR)
                  </h3>
                  <p className="tw-text-gray-700 tw-leading-relaxed">
                    The European Union's Ecodesign Regulation for Sustainable Products mandates the design of products based on criteria such as energy efficiency, durability, recyclability, and environmental impact. DPPs document compliance with these criteria transparently, facilitating adherence to this regulation. Transparent reporting of criteria like reducing the carbon footprint from production processes, optimizing energy consumption, and increasing resource efficiency makes compliance easier.
                  </p>
                </div>
                <div className="tw-p-4">
                  <h3 className="tw-text-xl tw-font-semibold tw-text-gray-900 tw-mb-3">
                    Circular Economy Action Plan (CEAP)
                  </h3>
                  <p className="tw-text-gray-700 tw-leading-relaxed">
                    The CEAP aims to extend the lifecycle of products, reduce waste generation, and use resources efficiently. DPPs contribute to achieving CEAP goals by tracking the recycling and reuse processes of products. Thus, even after products become waste, their traceability is maintained, enabling more effective management of recycling processes and promoting efficient resource use.
                  </p>
                </div>
                <div className="tw-p-4">
                  <h3 className="tw-text-xl tw-font-semibold tw-text-gray-900 tw-mb-3">
                    New Battery Regulation
                  </h3>
                  <p className="tw-text-gray-700 tw-leading-relaxed">
                    The New Battery Regulation introduces specific rules to reduce the environmental impact of batteries and increase recycling rates. DPPs facilitate compliance with this regulation by providing detailed information about battery components, performance, and recycling information. Battery manufacturers can use DPPs to document the source of materials used in production and recycling options, sharing this information with consumers.
                  </p>
                </div>
              </div>
            </div>

            {/* Sectors Section */}
            <div className="tw-mb-12">
              <h2 className="tw-text-4xl tw-font-bold tw-text-gray-900 tw-mb-6">
                In Which Sectors Will DPPs Be Used?
              </h2>
              <p className="tw-text-lg tw-text-gray-700 tw-leading-relaxed">
                The European Union plans to initially make DPPs mandatory in critical sectors such as batteries, vehicles, textiles, electronics, furniture, plastics, construction, and chemicals. However it is expected that DPP applications will also become widespread in other product categories like food, cosmetics, and pharmaceuticals. In the food sector, DPPs will provide consumers with greater confidence by tracking products through every stage, from farm to table. In the cosmetics and pharmaceutical sectors, DPPs will help provide more information on product formulation, the origin of ingredients used, and their impact on human health.
              </p>
            </div>

            {/* Blockchain Section */}
            <div className="tw-mb-12">
              <h2 className="tw-text-4xl tw-font-bold tw-text-gray-900 tw-mb-6">
                Strengthening DPPs with Blockchain Technology
              </h2>
              <p className="tw-text-lg tw-text-gray-700 tw-leading-relaxed tw-mb-6">
                Blockchain technology is a powerful tool for ensuring the data integrity and transparency of Digital Product Passports. Thanks to blockchain, all data within a Digital Product Passport DPP is stored in a distributed network, minimizing the risk of manipulation. This enhances stakeholder trust in the data and contributes to high-level traceability. In particular, blockchain-based DPP usage in supply chains offers significant advantages for companies prioritizing data integrity and transparency. Additionally, blockchain technology increases the security of data transfers, enabling faster and safer information flow among all stakeholders.
              </p>
              <p className="tw-text-lg tw-text-gray-700 tw-leading-relaxed">
                The use of blockchain infrastructure not only ensures data security but also makes this data accessible and verifiable by everyone. This is particularly advantageous for complex supply chains, as every link in the chain can monitor the product's stage and processes it has gone through. This helps businesses enhance transparency throughout the supply chain, improve reliability, and build a more responsible brand image in the eyes of consumers.
              </p>
            </div>

            {/* Doruksistem Service Section */}
            <div>
              <h2 className="tw-text-4xl tw-font-bold tw-text-gray-900 tw-mb-6">
                Doruksistem's DPP Preparation Service
              </h2>
              <p className="tw-text-lg tw-text-gray-700 tw-leading-relaxed tw-mb-8">
                DORUKSISTEM offers a comprehensive service for preparing and managing Digital Product Passports (DPPs). This service gathers all the necessary information about products, stores it securely, and manages it effectively. Using blockchain technology, Doruksistem ensures the reliability of the data and helps you comply with regulatory requirements.
              </p>
              
              {/* Yeni görsel ekleyelim */}
              <div className="tw-flex tw-justify-center tw-mb-8">
                <div className="tw-relative tw-w-full tw-max-w-4xl tw-h-[500px] tw-md:h-[600px]">
                  <Image
                    src="/images/doruksistem_dp.webp"
                    alt="Doruksistem DPP Service - Digital Product Passport"
                    fill
                    className="tw-object-cover tw-rounded-lg"
                  />
                </div>
              </div>
              
              <div className="tw-grid tw-grid-cols-1 tw-md:grid-cols-2 tw-gap-4 tw-mb-8">
                <div className="tw-p-4">
                  <h3 className="tw-text-lg tw-font-semibold tw-text-gray-900 tw-mb-2">
                    Data Collection and Analysis
                  </h3>
                  <p className="tw-text-gray-700 tw-leading-relaxed">
                    Gathering and analyzing all the necessary data throughout the product lifecycle. This includes raw material sourcing, production processes, logistics, and end-user stages, providing guidance to businesses by analyzing the collected data.
                  </p>
                </div>
                <div className="tw-p-4">
                  <h3 className="tw-text-lg tw-font-semibold tw-text-gray-900 tw-mb-2">
                    Creating the Digital Product Passport
                  </h3>
                  <p className="tw-text-gray-700 tw-leading-relaxed">
                    Preparing the Digital Product Passport, which contains all the product information, and storing this information appropriately. The digital product passport provides detailed information about every stage of the product, from production to recycling.
                  </p>
                </div>
                <div className="tw-p-4">
                  <h3 className="tw-text-lg tw-font-semibold tw-text-gray-900 tw-mb-2">
                    Blockchain Integration
                  </h3>
                  <p className="tw-text-gray-700 tw-leading-relaxed">
                    Using blockchain infrastructure for data reliability and traceability. Blockchain technology ensures data is protected against manipulation, building trust among all stakeholders.
                  </p>
                </div>
                <div className="tw-p-4">
                  <h3 className="tw-text-lg tw-font-semibold tw-text-gray-900 tw-mb-2">
                    Regulatory Compliance and Reporting
                  </h3>
                  <p className="tw-text-gray-700 tw-leading-relaxed">
                    Ensuring compliance with national and international regulations and providing necessary reporting. This helps businesses meet their legal obligations while also reporting their sustainability goals.
                  </p>
                </div>
              </div>
              
              <p className="tw-text-lg tw-text-gray-700 tw-leading-relaxed">
                Doruksistem AS supports businesses in achieving their sustainability and transparency goals by providing expert assistance throughout the Digital Product Passport DPP processes. This way, you can gain consumer trust and strengthen your competitive advantage. Furthermore, ongoing updates and consultancy services provided by Doruksistem ensure continuous improvement in regulatory compliance and sustainability performance.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
