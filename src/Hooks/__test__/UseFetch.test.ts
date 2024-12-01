import { productStub } from "@/mappers/__stubs__/product.stub";
import { mockCategoryList } from "@/services/__mock__/categoryList";
import * as services from "@/services/api.service";
import { act, renderHook, waitFor } from "@testing-library/react";
import { useFetch } from "../UseFetch";

describe("useFetch hook", () => {

    let spy: jest.SpyInstance;

    it("should return initial state", async () => {
        const apiCall = jest.fn().mockResolvedValue(null);
        const { result } = renderHook(() => useFetch(apiCall));

        await act(async () => {
            expect(result.current.data).toBeNull();
            expect(result.current.loading).toBe(true);
            expect(result.current.error).toBeNull();
        });
    });

    it("should update the data when getProductCategoryList returns the category list", async () => {

        const spy = jest.spyOn(services, "getProductCategoryList");
        spy.mockResolvedValue(mockCategoryList);
        const { result } = renderHook(() =>
            useFetch(services.getProductCategoryList)
        );

        await waitFor(() =>
            expect(result.current.data).toEqual(mockCategoryList)
        );

        expect(result.current.loading).toBe(false);
        expect(result.current.error).toBeNull();
        expect(spy).toHaveBeenCalledTimes(1);

        spy.mockRestore();
    });

    it("should update the data when getAllProducts returns the product list", async () => {

        spy = jest.spyOn(services, "getAllProducts");
        spy.mockResolvedValue([productStub]);

        const { result } = renderHook(() => useFetch(services.getAllProducts));

        await waitFor(() => expect(result.current.data).toEqual([productStub]));

        expect(result.current.loading).toBe(false);
        expect(result.current.error).toBeNull();
        expect(spy).toHaveBeenCalledTimes(1);

        spy.mockRestore();

    });

    it("should update the data when getCategoryProducts returns the category product list", async () => {

        const spy = jest.spyOn(services, "getCategoryProducts");
        spy.mockResolvedValue([productStub]);

        const { result } = renderHook(() =>
            useFetch(() => services.getCategoryProducts("beauty"))
        );

        await waitFor(() => expect(result.current.data).toEqual([productStub]));

        expect(result.current.loading).toBe(false);
        expect(result.current.error).toBeNull();
        expect(spy).toHaveBeenCalledWith("beauty");
        expect(spy).toHaveBeenCalledTimes(1);

        spy.mockRestore();

    });

    it("should update the data when getCategoryProducts returns the category product list", async () => {

        const spy = jest.spyOn(services, "getCategoryProducts");
        spy.mockResolvedValue([productStub]);

        const { result } = renderHook(() =>
            useFetch(() => services.getCategoryProducts("beauty"))
        );

        await waitFor(() => expect(result.current.data).toEqual([productStub]));

        expect(result.current.loading).toBe(false);
        expect(result.current.error).toBeNull();
        expect(spy).toHaveBeenCalledWith("beauty");
        expect(spy).toHaveBeenCalledTimes(1);

        spy.mockRestore();

    });

    it("should update the data when fetchDistricts returns the districts", async () => {

        const spy = jest.spyOn(services, "fetchDistricts");
        spy.mockResolvedValue(["Surquillo"]);

        const { result } = renderHook(() =>
            useFetch(() => services.fetchDistricts())
        );

        await waitFor(() => expect(result.current.data).toEqual(["Surquillo"]));

        expect(result.current.loading).toBe(false);
        expect(result.current.error).toBeNull();
        expect(spy).toHaveBeenCalledWith();
        expect(spy).toHaveBeenCalledTimes(1);

        spy.mockRestore();

    });

    it("should set error when apiCall fails", async () => {
        const mockError = new Error("apiCall error");
        const apiCall = jest.fn().mockRejectedValue(mockError);
        const { result } = renderHook(() => useFetch(apiCall));

        await waitFor(() => expect(result.current.error).toEqual(mockError));
        expect(result.current.data).toBeNull();
        expect(result.current.loading).toBe(false);
    });
});
