import { seoPlugin } from "@payloadcms/plugin-seo";
import type { GenerateTitle, GenerateURL } from "@payloadcms/plugin-seo/types";
import { s3Storage } from "@payloadcms/storage-s3";
import type { Plugin } from "payload";

import { getServerSideURL } from "@/utils/get-url";

const generateTitle: GenerateTitle<Record<string, unknown>> = ({ doc }) => {
  return doc?.title ? `${doc.title} | UseSafe` : "UseSafe";
};

const generateURL: GenerateURL<Record<string, unknown>> = ({ doc }) => {
  const url = getServerSideURL();

  return doc?.slug ? `${url}/${doc.slug}` : url;
};

const plugins: Plugin[] = [
  seoPlugin({
    generateTitle,
    generateURL,
  }),
];

if (process.env.NODE_ENV === "production") {
  const s3StoragePlugin = s3Storage({
    collections: {
      media: true,
    },
    bucket: process.env.S3_BUCKET || "",
    config: {
      forcePathStyle: true,
      credentials: {
        accessKeyId: process.env.S3_ACCESS_KEY_ID || "",
        secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || "",
      },
      region: process.env.S3_REGION || "",
      endpoint: process.env.S3_ENDPOINT || "",
    },
  });

  plugins.push(s3StoragePlugin);
}

const s3StoragePlugin = s3Storage({
  collections: {
    media: true,
  },
  bucket: process.env.S3_BUCKET || "",
  config: {
    forcePathStyle: true,
    credentials: {
      accessKeyId: process.env.S3_ACCESS_KEY_ID || "",
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || "",
    },
    region: process.env.S3_REGION || "",
    endpoint: process.env.S3_ENDPOINT || "",
  },
});

plugins.push(s3StoragePlugin);

export { plugins };
