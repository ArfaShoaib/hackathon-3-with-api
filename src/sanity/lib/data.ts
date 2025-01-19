import { client } from "@/sanity/lib/client";

export interface Product {
  id: string;
  title: string;
  description: string;
  productImageUrl: string;
  price: number;
  tags: string[];
  discountPercentage?: number;
  isNew?: boolean;
}

export const getAllProducts = async () => {
  try {
    const Allproducts = `*[_type == "product"]{
    _id,
    title,
    description,
    "productImageUrl": productImage.asset->url,
    price,
    tags,
    discountPercentage,
    isNew
  }`;
    const products = await client.fetch(Allproducts);
    return products;
  } catch (error) {
    console.error(error);
  }
};
