import { client } from "@/sanity/lib/client";

export interface Products {
  _id: string;
  title: string;
  description: string;
  productImageUrl: string;
  price: number;
  slug: string;
  tags: string[];
  discountPercentage?: number;
  isNew?: boolean;
}


export const getAllProducts = async () => {
  try {
    const Allproducts = `*[_type == "product"]{
    _id,
    "slug": slug.current,
    title,
    description,
    "productImageUrl": productImage.asset->url,
    price,
    tags,
    discountPercentage,
    isNew
  }`;
    const products:Products[] = await client.fetch(Allproducts);
    return products;
  } catch (error) {
    console.error(error);
  }
};
export const getAllProductsbyID = async (slug: string) => {
  try {
    const Singleproducts = `*[_type == "product" && slug.current == $slug][0]{
      _id,
      "slug": slug.current,
      title,
      description,
      "productImageUrl": productImage.asset->url,
      price,
      tags,
      discountPercentage,
      isNew
    }`;
    const product = await client.fetch(Singleproducts, { slug });
    return product || null;
  } catch (error) {
    console.error(error);
    return null;
  }
};


export interface Dresses {
  isNew: boolean;
  _id: string;
  title: string;
  slug: string;
  productImageUrl:string;
  description: string;
  price: number;
  discountPercentage?: number;
  tags: string[];
  size: string[];
  color: string[];
}


export const getSProductsbyID = async (slug: string) => {
  try {
    const Singleproduct2 = `*[_type == "dress" && slug.current == $slug][0]{
      _id,
      "slug": slug.current,
      title,
      description,
      "productImageUrl": productImage.asset->url, 
      price,
      tags,
      discountPercentage,
      size,
      color
    }`;
    const Sproduct = await client.fetch(Singleproduct2, { slug });
    return Sproduct || null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

