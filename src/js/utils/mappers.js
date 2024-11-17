export const productMapper = product => ({
    id: product.id,
    productTitle:product.title,
    productImage: product.images[0],
    availabilityStatus: product.availabilityStatus,
    productPrice:product.price
});