"use client";
import { useEffect, useState } from "react";
import { getTasks } from "@/services/task";
import { Task } from "@/types/task";


export const useTasks = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const fetchTasks = async () => {
        try {
            setLoading(true);
            const data = await getTasks();
            setTasks(data.data);
        }
        catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("Something went wrong");
            }
        }
        finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);


    return {
        tasks,
        setTasks,
        loading,
        setLoading,
        error,
        setError,
        refetch: fetchTasks,
    };
};
