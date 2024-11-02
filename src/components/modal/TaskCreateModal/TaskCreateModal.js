import router from "@/router";
import { create } from "@/services/taskService";
import { useToast } from "vue-toastification";

const toast = useToast();

export default {
    props: {
        visible: {
            type: Boolean,
            required: true,
        },
    },
    data() {
        return {
            localTask: {
                title: "",
                dueDate: "",
                description: "",
                status: "pending",
            },
        };
    },
    methods: {
        close() {
            this.$emit("close");
        },
        setPending() {
            this.localTask.status = "pending";
        },
        setCompleted() {
            this.localTask.status = "completed";
        },
        async create() {
            try {
                const response = await create(this.localTask);

                if (!response.ok) {
                    if (response.status === 401) {
                        toast.error("Sessão expirada, efetue login novamente.");
                        router.push({ name: "Login" });
                        return;
                    } else if (response.status === 400) {
                        toast.error("Por favor, preencha todos os campos!");
                        return;
                    }
                    throw new Error("Erro ao salvar a tarefa");
                }

                const savedTask = await response.json();

                this.$emit("task-created", savedTask);

                toast.success("Tarefa adicionada com sucesso!");
                this.localTask = {
                    title: "",
                    dueDate: "",
                    description: "",
                    status: "pending",
                };
            } catch (error) {
                toast.error("Erro ao salvar a tarefa");
            }
        },
    },
};
