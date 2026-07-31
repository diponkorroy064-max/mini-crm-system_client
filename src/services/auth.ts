const url = process.env.NEXT_PUBLIC_SERVER_URL
const API_URL = `${url}/api/auth`;


export const loginUser = async (data: {
    email: string;
    password: string;}) => {
    const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    return response.json();
};


export const registerUser = async (data: {
    name: string;
    email: string;
    password: string;
}) => {
    const response = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    return response.json();
};


export const logout = () => {
    localStorage.removeItem("token");
};

