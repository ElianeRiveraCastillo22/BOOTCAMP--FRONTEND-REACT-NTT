import { schemaForgotPassword, schemaLogin, schemaSignUp } from "../form.schema";

describe("Validation Schemas", () => {
    describe("schemaLogin", () => {
        it("should pass validation with valid data", () => {
            const validData = {
                username: "emilys",
                email: "emily.johnson@x.dummyjson.com",
                password: "emilyspass",
            };
            expect(() => schemaLogin.parse(validData)).not.toThrow();
        });

        it("should fail validation if username contains numbers", () => {
            const invalidData = {
                username: "emilys1234",
                email: "emily.johnson@x.dummyjson.com",
                password: "emilyspass",
            };
            expect(() => schemaLogin.parse(invalidData)).toThrow("The name cannot contain numbers");
        });

        it("should fail validation if email is invalid", () => {
            const invalidData = {
                username: "emilys",
                email: "emily.johnsonx.dummyjson.com",
                password: "emilyspass",
            };
            expect(() => schemaLogin.parse(invalidData)).toThrow("Invalid email");
        });

        it("should fail validation if password is less than 6 characters", () => {
            const invalidData = {
                username: "emilys",
                email: "emily.johnson@x.dummyjson.com",
                password: "123",
            };
            expect(() => schemaLogin.parse(invalidData)).toThrow("Invalid password: must be at least 6 characters.");
        });
    });

    describe("schemaSignUp", () => {
        it("should pass validation with valid data", () => {
            const validData = {
                username: "emilys",
                email: "emily.johnson@x.dummyjson.com",
                password: "securePass123",
                confirmPassword: "securePass123",
            };
            expect(() => schemaSignUp.parse(validData)).not.toThrow();
        });

        it("should fail validation if passwords do not match", () => {
            const invalidData = {
                username: "emilys",
                email: "emily.johnson@x.dummyjson.com",
                password: "securePass123",
                confirmPassword: "differentPass",
            };
            expect(() => schemaSignUp.parse(invalidData)).toThrow(
                "Passwords are invalid. Make sure they meet the requirements."
            );
        });

        it("should fail validation if confirmPassword is missing", () => {
            const invalidData = {
                username: "emilys",
                email: "emily.johnson@x.dummyjson.com",
                password: "securePass123",
            };

            try {
                schemaSignUp.parse(invalidData);
            } catch (error: any) {
                expect(error.errors[0].message).toBe("Required");
                expect(error.errors[0].path).toEqual(["confirmPassword"]);
            }
        });

        it("should fail validation if username contains numbers", () => {
            const invalidData = {
                username: "emilys123",
                email: "emily.johnson@x.dummyjson.com",
                password: "securePass123",
                confirmPassword: "securePass123",
            };
            expect(() => schemaSignUp.parse(invalidData)).toThrow("The name cannot contain numbers");
        });
    });

    describe("schemaForgotPassword", () => {
        it("should pass validation with valid email", () => {
            const validData = {
                email: "emily.johnson@x.dummyjson.com",
            };
            expect(() => schemaForgotPassword.parse(validData)).not.toThrow();
        });

        it("should fail validation if email is invalid", () => {
            const invalidData = {
                email: "emily.johnson.dummyjson.com",
            };
            expect(() => schemaForgotPassword.parse(invalidData)).toThrow("Invalid email");
        });

        it("should fail validation if email is empty", () => {
            const invalidData = {
                email: "",
            };
            expect(() => schemaForgotPassword.parse(invalidData)).toThrow("Email is required");
        });
    });
});
