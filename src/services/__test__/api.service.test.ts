import { ProductResponse } from "@/models/product.model";
import { mockAllProducts } from "../__mock__/allProducts";
import { mockCategoryList } from "../__mock__/categoryList";
import { getAllProducts, getProductCategoryList } from "../api.service";
import { productMapper } from "@/mappers/product.mapper";

const mockFetch = <T>(
    data: T,
    status: number = 200,
    ok: boolean = true
): jest.Mock => {
    const fn = jest.fn().mockImplementationOnce(() => {
        const response = {
            ok,
            status,
            json: () => Promise.resolve(data),
            blob: () => Promise.resolve(data),
            clone: () => ({ ...response }),
            text: () => Promise.resolve(JSON.stringify(data)),
        };
        return Promise.resolve(response);
    });

    global.fetch = fn;
    return fn;
};


describe("getProductCategoryList", () => {

    beforeAll(() => {
        jest.spyOn(console, 'error').mockImplementation(() => {});
    });

    beforeEach(() => {

        global.fetch = jest.fn();

    });

    afterEach(() => {

        jest.resetModules();
        global.fetch = fetch;

    });

	it("returns a list of categories when the API call is successful", async()=>{

		mockFetch<string[]>(mockCategoryList)
		const dataCategoryList = await getProductCategoryList()
		expect(dataCategoryList).toEqual(mockCategoryList)

	})

	it("returns an empty array if the category list API fails", async()=>{

		mockFetch<[]>([], 500, false);
		const dataCategoryList = await getProductCategoryList()
		expect(dataCategoryList).toEqual([])

	})


    it.each([() => getProductCategoryList()])(

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

describe("getAllProducts", () => {

    beforeAll(() => {
        jest.spyOn(console, 'error').mockImplementation(() => {});
    });

    beforeEach(() => {

        global.fetch = jest.fn();

    });

    afterEach(() => {

        jest.resetModules();
        global.fetch = fetch;

    });

	it("returns all products when the API call is successful", async()=>{

		mockFetch<ProductResponse>(mockAllProducts)
		const dataProductList = await getAllProducts()
		expect(dataProductList).toEqual(mockAllProducts.products.map(productMapper))

	})

	it("returns an empty array if the product list API fails", async()=>{

		mockFetch<[]>([], 500, false);
		const dataProductList = await getAllProducts()
		expect(dataProductList).toEqual([])

	})


    it.each([() => getAllProducts()])(

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

describe("getCategoryProducts", () => {

    beforeAll(() => {
        jest.spyOn(console, 'error').mockImplementation(() => {});
    });

    beforeEach(() => {

        global.fetch = jest.fn();

    });

    afterEach(() => {

        jest.resetModules();
        global.fetch = fetch;

    });

	it("returns all products of a category when the API call is successful", async()=>{

		mockFetch<ProductResponse>(mockAllProducts)
		const dataProductList = await getAllProducts()
		expect(dataProductList).toEqual(mockAllProducts.products.map(productMapper))

	})

	it("returns an empty array if the category products API fails", async()=>{

		mockFetch<[]>([], 500, false);
		const dataProductList = await getAllProducts()
		expect(dataProductList).toEqual([])

	})


    it.each([() => getAllProducts()])(

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
