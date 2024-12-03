import { LoginResponse } from "@/models/login-response";

const loginUser = async (
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
            throw new Error(`Fallo al autenticar, status: ${response.status}`);
        }

        const data: LoginResponse = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
};

const refreshAccessToken = async (refreshToken: string) => {
    try {
        const response = await fetch("/api/auth/refresh", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                refreshToken: refreshToken,
                expiresInMins: 30,
            }),
            credentials: "include",
        });

        if (!response.ok) {
            throw new Error("Error al renovar el token");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error en la solicitud de renovación de token:", error);
        throw error;
    }
};

export { refreshAccessToken, loginUser };
