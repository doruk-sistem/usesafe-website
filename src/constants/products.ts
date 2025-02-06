interface Product {
  id: 'digital-product-password' | 'digital-twins' | 'use-safe-certification';
  href: string;
  image: string;
}

const products: Product[] = [
  {
    id: "digital-product-password",
    href: "/solutions/digital-product-password",
    image: "/images/product-security.webp",
  },
  {
    id: "digital-twins",
    href: "/solutions/digital-twins",
    image: "/images/blockchain-1.webp",
  },
  {
    id: "use-safe-certification",
    href: "/solutions/use-safe-certification",
    image: "/images/products-1.webp",
  },
];

export default products;