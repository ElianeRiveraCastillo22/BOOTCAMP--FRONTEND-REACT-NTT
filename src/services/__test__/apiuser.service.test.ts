import { mockFetch } from "@/utils/mockFetch";
import { mockUserCredentials, UserCredentials } from "../__mock__/user";
import { loginUser } from "../apiuser.service";

describe("SHOP authentication services ", () => {

    beforeEach(() => {

        global.fetch = jest.fn();

    });

    afterEach(() => {

        jest.resetModules();
        global.fetch = fetch;

    });
    test("should authenticate the user successfully", () => {
        const { username, accessToken } = mockUserCredentials;
        expect(username).toBe("emilys");
        expect(accessToken).toBeDefined();
    });

	it("should return user credentials upon login", async()=>{

		mockFetch<UserCredentials>(mockUserCredentials)
		const dataUserCredential = await loginUser("emilys","emilyspass")

        expect(dataUserCredential).toBeDefined()
		expect(dataUserCredential).toEqual(mockUserCredentials)

	})

	it("throws an error if the login response is unsuccessful", async()=>{

        mockFetch<UserCredentials>(mockUserCredentials, 404, false);

        try {

            await loginUser("emilys","emilys");

        } catch (error) {

            expect(error).toEqual(new Error(`Authentication failed, status: 404`));

        }

	})
	it("throws an error if the login response is unsuccessful", async()=>{

        mockFetch<UserCredentials>(mockUserCredentials, 400, false);

        try {

            await loginUser("eys","emilys");

        } catch (error) {

            expect(error).toEqual(new Error(`The user does not exist`));

        }

	})


});