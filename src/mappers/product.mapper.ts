import { MappedProduct, Product } from "../models/product.model";

export const productMapper = (product:Product): MappedProduct => ({
    id: product.id,
    title:product.title,
    image: product.images[0],
    category: product.category,
    price:product.price
});