export const isAuthenticated = () => {
    if (typeof window === "undefined") {
        return false;
    }
    return !!localStorage.getItem("token");
};


export interface User {
    name: string;
    email: string;
    role: "ADMIN" | "STAFF";
    image?: string | null;
}

export const getUser = () => {
    if (typeof window === "undefined") return null;

    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) as User : null;
};

