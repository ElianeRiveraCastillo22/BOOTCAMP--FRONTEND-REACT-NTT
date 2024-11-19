import { MappedProduct, Product } from "../models/product.interface";

export const productMapper = (product:Product):MappedProduct => ({
    id: product.id,
    productTitle:product.title,
    productImage: product.images[0],
    availabilityStatus: product.availabilityStatus,
    productPrice:product.price
});