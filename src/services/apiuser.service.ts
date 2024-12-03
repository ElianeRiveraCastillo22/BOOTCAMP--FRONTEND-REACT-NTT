import { LoginResponse } from "@/models/login-response";

export const loginUser = async (
    username: string,
    password: string
): Promise<LoginResponse> => {
    try {
        const url = `/api/auth/login`;

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
                expiresInMins: 30,
            }),
            credentials: "include",
        });

        if (!response.ok) {
            if (response.status === 400) {
                throw new Error(`The user does not exist`);
            }
            throw new Error(
                `Authentication failed, status: ${response.status}`
            );
        }

        const data: LoginResponse = await response.json();

        return data;
    } catch (error) {
        throw error;
    }
};
