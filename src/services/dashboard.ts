const url = process.env.NEXT_PUBLIC_SERVER_URL;

const API_URL = `${url}/api/dashboard/admin`;

const getHeaders = () => {
    const token = localStorage.getItem("token");

    return {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    };
};

// Get Dashboard Statistics
export const getDashboardStats = async () => {
    const res = await fetch(API_URL, {
        headers: getHeaders(),
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(
            data.message || "Failed to fetch dashboard statistics"
        );
    }

    return data;
};
