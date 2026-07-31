const url = process.env.NEXT_PUBLIC_SERVER_URL
const API_URL = `${url}/api`;


export const getProfile = async () => {
    const token = localStorage.getItem("token");

    const response = await fetch(`${API_URL}/auth/profile`, {
        headers: {
            Authorization: `Bearer ${token}`,
            // Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    });

    return response.json();
};
