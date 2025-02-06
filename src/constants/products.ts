interface Product {
  id: 'digital-product-passports' | 'digital-twins' | 'use-safe-certification'; 
  title: string;
  href: string;
  image: string;
}

const products: Product[] = [
  {
    id: "digital-product-passports",  
    title :"products.digital-product-passports.title",
    href: "/solutions/digital-product-passports", 
    image: "/images/product-security.webp",
  },
  {
    id: "digital-twins",
    title :"products.digital-twins.title",
    href: "/solutions/digital-twins",
    image: "/images/blockchain-1.webp",
  },
  {
    id: "use-safe-certification",
    title :"products.use-safe-certification.title",
    href: "/solutions/use-safe-certification",
    image: "/images/products-1.webp",
  },
];

export default products;