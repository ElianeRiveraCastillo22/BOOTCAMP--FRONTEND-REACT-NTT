export const BASE_API = 'https://dummyjson.com';

export async function getProductCategoryList(BASE_API, PATH) {

    try{
        const response = await fetch(BASE_API + PATH);
        const data = await response.json()
        return data;
    }catch(error){
        console.error(`Error al consumir la lista de categorias ${error}`)
    }


}
