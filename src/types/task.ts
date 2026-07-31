export type TaskStatus =
    | "PENDING"
    | "IN_PROGRESS"
    | "COMPLETED";

export type TaskPriority =
    | "LOW"
    | "MEDIUM"
    | "HIGH";


export interface TaskUser {
    id: number;
    name: string;
    email: string;
    role: "ADMIN" | "STAFF";
}


export interface Task {
    id: number;
    title: string;
    description?: string;

    status: TaskStatus;
    priority: TaskPriority;

    dueDate?: string;

    createdAt: string;
    updatedAt: string;

    createdById: number;
    assignedToId?: number | null;

    createdBy?: TaskUser;
    assignedTo?: TaskUser | null;
}


export interface CreateTaskData {
    title: string;
    description?: string;

    assignedToId?: number;

    priority?: TaskPriority;

    dueDate?: string;
}


export interface UpdateTaskData {
    title?: string;
    description?: string;

    status?: TaskStatus;

    priority?: TaskPriority;

    assignedToId?: number;

    dueDate?: string;
}


