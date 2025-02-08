'use client';
import { useState, useEffect } from 'react';
import { client } from '@/sanity/lib/client';

interface Product {
    _id: string;
    title: string;
    price: number;
    productImage?: string; // Change 'any' to 'string'
    schemaType: string;
}

const PriceRangeFilter = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);

    useEffect(() => {
        const fetchProducts = async () => {
            const query = `
                *[_type == "dress" || _type == "product"] {
                    _id,
                    title,
                    price,
                    productImage,
                    _type
                }
            `;
            const data: Product[] = await client.fetch(query);
            setProducts(data);
            setFilteredProducts(data);
        };

        fetchProducts();
    }, []);

    // Filter products based on the selected price range
    useEffect(() => {
        setFilteredProducts(products.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]));
    }, [priceRange, products]);

    return (
        <div className="p-4">
            <h2 className="text-lg font-bold">Filter by Price</h2>
            <input
                type="range"
                min="0"
                max="1000"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                className="w-full my-2"
            />
            <input
                type="range"
                min="0"
                max="1000"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                className="w-full my-2"
            />
            <p>Price Range: ${priceRange[0]} - ${priceRange[1]}</p>

            <div className="mt-4">
                <h3 className="text-md font-semibold">Filtered Products</h3>
                {filteredProducts.length > 0 ? (
                    <ul>
                        {filteredProducts.map(product => (
                            <li key={product._id} className="border p-2 my-2 rounded">
                                <p><strong>{product.title}</strong></p>
                                <p>Price: ${product.price}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No products found in this price range.</p>
                )}
            </div>
        </div>
    );
};

export default PriceRangeFilter;
