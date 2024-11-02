import { ENDPOINTS, getHeaders } from "@/config/api";

export async function fakefetchTasks() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const simulatedTasks = [
        {
            id: 1,
            title: "Tarefa 1",
            status: "pending",
            dueDate: "2024-10-30",
        },
        {
            id: 2,
            title: "Tarefa 2",
            status: "completed",
            dueDate: "2024-10-31",
        },
        { id: 3, title: "Tarefa 3", status: "pending", dueDate: "2024-11-01" },
        {
            id: 4,
            title: "Tarefa 4",
            status: "completed",
            dueDate: "2024-11-01",
        },
        { id: 5, title: "Tarefa 5", status: "pending", dueDate: "2024-11-01" },
        {
            id: 6,
            title: "Tarefa 6",
            status: "completed",
            dueDate: "2024-11-01",
        },
        { id: 7, title: "Tarefa 7", status: "pending", dueDate: "2024-11-01" },
        {
            id: 8,
            title: "Tarefa 8",
            status: "completed",
            dueDate: "2024-11-01",
        },
        {
            id: 1,
            title: "Tarefa 1",
            status: "pending",
            dueDate: "2024-10-30",
        },
        {
            id: 2,
            title: "Tarefa 2",
            status: "completed",
            dueDate: "2024-10-31",
        },
        { id: 3, title: "Tarefa 3", status: "pending", dueDate: "2024-11-01" },
        {
            id: 4,
            title: "Tarefa 4",
            status: "completed",
            dueDate: "2024-11-01",
        },
        { id: 5, title: "Tarefa 5", status: "pending", dueDate: "2024-11-01" },
        {
            id: 6,
            title: "Tarefa 6",
            status: "completed",
            dueDate: "2024-11-01",
        },
        { id: 7, title: "Tarefa 7", status: "pending", dueDate: "2024-11-01" },
        {
            id: 8,
            title: "Tarefa 8",
            status: "completed",
            dueDate: "2024-11-01",
        },
        {
            id: 1,
            title: "Tarefa 1",
            status: "pending",
            dueDate: "2024-10-30",
        },
        {
            id: 2,
            title: "Tarefa 2",
            status: "completed",
            dueDate: "2024-10-31",
        },
        { id: 3, title: "Tarefa 3", status: "pending", dueDate: "2024-11-01" },
        {
            id: 4,
            title: "Tarefa 4",
            status: "completed",
            dueDate: "2024-11-01",
        },
        { id: 5, title: "Tarefa 5", status: "pending", dueDate: "2024-11-01" },
        {
            id: 6,
            title: "Tarefa 6",
            status: "completed",
            dueDate: "2024-11-01",
        },
        { id: 7, title: "Tarefa 7", status: "pending", dueDate: "2024-11-01" },
        {
            id: 8,
            title: "Tarefa 8",
            status: "completed",
            dueDate: "2024-11-01",
        },
        {
            id: 1,
            title: "Tarefa 1",
            status: "pending",
            dueDate: "2024-10-30",
        },
        {
            id: 2,
            title: "Tarefa 2",
            status: "completed",
            dueDate: "2024-10-31",
        },
        { id: 3, title: "Tarefa 3", status: "pending", dueDate: "2024-11-01" },
        {
            id: 4,
            title: "Tarefa 4",
            status: "completed",
            dueDate: "2024-11-01",
        },
        { id: 5, title: "Tarefa 5", status: "pending", dueDate: "2024-11-01" },
        {
            id: 6,
            title: "Tarefa 6",
            description: "Descrição da Tarefa 6",
            status: "completed",
            dueDate: "2024-11-01",
        },
        { id: 7, title: "Tarefa 7", status: "pending", dueDate: "2024-11-01" },
        {
            id: 8,
            title: "Tarefa 8",
            status: "completed",
            dueDate: "2024-11-01",
        },
    ];

    return simulatedTasks;
}

export async function fetchTasks() {
    const response = await fetch(ENDPOINTS.TASKS, {
        headers: getHeaders(),
    });
    if (!response.ok) {
        throw new Error("Falha ao carregar as tarefas");
    }
    return await response.json();
}

export async function save(task) {
    const { id, ...taskWithoutId } = task;
    const response = await fetch(`${ENDPOINTS.TASKS}/${id}`, {
        method: "PUT",

        headers: getHeaders(),
        body: JSON.stringify(taskWithoutId),
    });
    return response;
}

export async function create(task) {
    const response = await fetch(`${ENDPOINTS.TASKS}`, {
        method: "POST",

        headers: getHeaders(),
        body: JSON.stringify(task),
    });
    return response;
}
