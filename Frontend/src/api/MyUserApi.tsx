import { useMutation } from "@tanstack/react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type CreateUserRequest = {
    auth0id: string;
    email: string;
}

export const useCreateMyUser = () => {
    const createMyUserRequest = async (user: CreateUserRequest) => {
        console.log("🚀 Attempting to fetch backend at:", `${API_BASE_URL}/api/my/user`);
        console.log("📦 Sending payload data:", user);

        try {
            const response = await fetch(`${API_BASE_URL}/api/my/user`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });

            if (!response.ok) {
                const errorText = await response.text();
                console.error("❌ Backend responded with an error status:", response.status, errorText);
                throw new Error('Failed to create user');
            }

            console.log("✅ Success! Backend received data and replied successfully.");
        } catch (error) {
            console.error("🚨 Network error. Could not reach backend server:", error);
            throw error;
        }
    };

    const { mutateAsync: createUser, isPending, isError, isSuccess } = useMutation({
        mutationFn: createMyUserRequest
    });

    return { 
        createUser, 
        isLoading: isPending, 
        isError, 
        isSuccess 
    };
};