import {
    CreateTaskData,
    UpdateTaskData,
} from "@/types/task";

const url = process.env.NEXT_PUBLIC_SERVER_URL;
const API_URL = `${url}/api/tasks`;


const getHeaders = () => {
    const token = localStorage.getItem("token");

    return {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    };
};


// Create Task
export const createTask = async (
    taskData: CreateTaskData
) => {
    const res = await fetch(API_URL, {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify(taskData),
    });

    const data = await res.json();
    console.log("data after task create", data);


    if (!res.ok) {
        throw new Error(data.message || "Failed to create task");
    }

    return data;
};


// Get All Tasks
export const getTasks = async () => {
    const res = await fetch(API_URL, {
        headers: getHeaders(),
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.message || "Failed to fetch tasks");
    }

    return data;
};


// Get One Task
export const getTask = async (id: number) => {
    const res = await fetch(`${API_URL}/${id}`, {
        headers: getHeaders(),
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.message || "Failed to fetch task");
    }

    return data;
};



// Update Task
export const updateTask = async (
    id: number,
    taskData: UpdateTaskData
) => {
    const res = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: getHeaders(),
        body: JSON.stringify(taskData),
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.message || "Failed to update task");
    }

    return data;
};



// Delete Task
export const deleteTask = async (id: number) => {
    const res = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
        headers: getHeaders(),
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.message || "Failed to delete task");
    }

    return data;
};


// Get My Tasks-------staff
export const getMyTasks = async () => {
    const res = await fetch(`${API_URL}/my/tasks`, {
        headers: getHeaders(),
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.message || "Failed to fetch my tasks");
    }

    return data;
};



