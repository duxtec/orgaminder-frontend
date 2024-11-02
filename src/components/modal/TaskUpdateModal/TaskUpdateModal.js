import router from "@/router";
import { save } from "@/services/taskService";
import { useToast } from "vue-toastification";

const toast = useToast();

export default {
    props: {
        task: {
            type: Object,
            required: true,
        },
        visible: {
            type: Boolean,
            required: true,
        },
    },
    data() {
        return {
            localTask: { ...this.task },
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
            console.log(this.localTask);
        },
        async save() {
            try {
                const response = await save(this.localTask);

                if (!response.ok) {
                    if (response.status === 401) {
                        toast.error("Sessão expirada, efetue login novamente.");
                        router.push({ name: "Login" });
                        return;
                    }
                    throw new Error("Erro ao salvar a tarefa");
                }

                const savedTask = await response.json();

                this.$emit("task-updated", savedTask);

                toast.success("Tarefa adicionada com sucesso!");
            } catch (error) {
                console.error(error);
                toast.error("Erro ao salvar a tarefa");
            }
        },
    },
    watch: {
        task: {
            handler(newTask) {
                this.localTask = { ...newTask };
            },
            immediate: true,
            deep: true,
        },
    },
};
