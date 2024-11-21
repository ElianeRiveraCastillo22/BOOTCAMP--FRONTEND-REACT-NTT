import { MappedProduct } from "../models/product.interface";

// siguiendo la misma lógica que me explicaste considerar tenerlo así 
export function filterProductNames(products: MappedProduct[], inputText: string): MappedProduct[] {
  if (!inputText.trim()) {
    return products;
  }

  const inputLowerCase = inputText.toLowerCase();

  return products.filter((product) => {
    const titleLowerCase = product.productTitle.toLowerCase().split(" ");
    return titleLowerCase.some((word) => word.startsWith(inputLowerCase));
  });
}
