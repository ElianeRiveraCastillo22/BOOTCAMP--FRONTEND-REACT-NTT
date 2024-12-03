import { ProductResponse } from "@/models/product.model";
import { mockFetch } from "@/utils/mockFetch";
import { mockAllProducts, mockAllProductsMapped } from "../__mock__/allProducts";
import { mockCategoryList } from "../__mock__/categoryList";
import { fetchDistricts, getAllProducts, getCategoryProducts, getProductCategoryList } from "../api.service";
import { productStub } from "@/mappers/__stubs__/product.stub";

describe("SHOP Services", () => {

    beforeEach(() => {

        global.fetch = jest.fn();

    });

    afterEach(() => {

        jest.resetModules();
        global.fetch = fetch;

    });

	it("returns a category list when the API call is successful", async()=>{

		mockFetch<string[]>(mockCategoryList)
		const dataCategoryList = await getProductCategoryList()

        expect(dataCategoryList).toBeDefined()
		expect(dataCategoryList).toEqual(mockCategoryList)

	})

	it("throws an error if the category list response is unsuccessful", async()=>{

        mockFetch<string[]>(mockCategoryList, 404, false);

        try {

            await getProductCategoryList();

        } catch (error) {

            expect(error).toEqual(new Error(`Fallo al buscar  la lista de categorías, status: 404`));

        }

	})

	it("returns a product list when the API call is successful", async()=>{

		mockFetch<ProductResponse>(mockAllProducts)
		const dataCategoryList = await getAllProducts("16"," 0")
		expect(dataCategoryList).toEqual(mockAllProductsMapped)

	})

	it("should throw an error if the request to fetch the product list is unsuccessful", async()=>{

        mockFetch<ProductResponse>(mockAllProducts, 404, false);

        try {

            await getAllProducts("16"," 0");

        } catch (error) {

            expect(error).toEqual(new Error(`Failed to search for products, status: 404`));

        }

	})

	it("returns a category list products when the API call is successful", async()=>{

		mockFetch<ProductResponse>(mockAllProducts)
		const dataCategoryList = await getCategoryProducts("beauty")
		expect(dataCategoryList).toEqual([productStub])

	})

	it("should throw an error if the request to fetch the category list products is unsuccessful", async()=>{

        mockFetch<ProductResponse>(mockAllProducts, 404, false);

        try {

            await getCategoryProducts("beauty");

        } catch (error) {

            expect(error).toEqual(new Error(`Failed to search for products in the category, status: 404`));

        }

	})

	it("returns a district list when the API call is successful", async()=>{

		mockFetch<string[]>(["Surquillo"])
		const dataCategoryList = await fetchDistricts()
		expect(dataCategoryList).toEqual(["Surquillo"])

	})

	it("should throw an error if the request to fetch the district list is unsuccessful", async()=>{

        mockFetch<string[]>(["Surquillo"], 404, false);

        try {

            await fetchDistricts();

        } catch (error) {

            expect(error).toEqual(new Error(`Failed to fetch districts`));

        }

	})


    it.each([
        () => getProductCategoryList(),
        () => getAllProducts("16"," 0"),
        () => getCategoryProducts("beauty"),
        () => getProductCategoryList(),
    ])(

        "fetch error with services",

        async (request) => {

            global.fetch = jest

                .fn()
                .mockRejectedValueOnce(new Error("Network error"));

            try {

                await request();

            } catch (error) {

                expect(error).toBeDefined();
                expect(error).toBeInstanceOf(Error);

            }
        }
    );
});


