export const API_BASE_URL = "http://localhost:3001/api";
export const ENDPOINTS = {
    TASKS: `${API_BASE_URL}/tasks`,
    USERS: `${API_BASE_URL}/users`,
};

export const getHeaders = () => {
    const token = localStorage.getItem("jwt");
    return {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    };
};
