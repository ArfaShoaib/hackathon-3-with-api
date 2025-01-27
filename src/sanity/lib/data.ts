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
export const getAllProductsbyID = async (id:string) => {
  try {
    const Singleproducts = `*[_type == "product" && _id == $id][0]{
    _id,
    title,
    description,
    "productImageUrl": productImage.asset->url,
    price,
    tags,
    discountPercentage,
    isNew
  }`;
    const product = await client.fetch(Singleproducts,{id});
    return product ? product : null;
  } catch (error) {
    console.error(error);
  }
};

export interface Dress {
  _id: string;
  title: string;
  productImageUrl:string;
  description: string;
  price: number;
  discountPercentage?: number;
  tags: string[];
  size: string[];
  color: string;
}


export const getSProductsbyID = async (id:string) => {
  try {
    const Singleproducts = `*[_type == "dress" && _id == $id][0]{
    _id,
    title,
    description,
    "dressImage" : Image.asset->url,
    price,
    tags,
    discountPercentage,
    isNew
  }`;
    const Sproduct = await client.fetch(Singleproducts,{id});
    return Sproduct ? Sproduct : null;
  } catch (error) {
    console.error(error);
  }
};