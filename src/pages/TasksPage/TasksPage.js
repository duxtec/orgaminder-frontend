import Logged from "@/components/layout/LoggedLayout/LoggedLayout.vue";
import TaskCreateModal from "@/components/modal/TaskCreateModal/TaskCreateModal.vue";
import TaskUpdateModal from "@/components/modal/TaskUpdateModal/TaskUpdateModal.vue";
import { fetchTasks } from "@/services/taskService";
import AccountBoard from "@components/boards/AccountBoard/AccountBoard.vue";
import CalendarBoard from "@components/boards/CalendarBoard/CalendarBoard.vue";
import KanbanBoard from "@components/boards/KanbanBoard/KanbanBoard.vue";
import { useToast } from "vue-toastification";

const toast = useToast();

export default {
    components: {
        Logged,
        KanbanBoard,
        CalendarBoard,
        AccountBoard,
        TaskUpdateModal,
        TaskCreateModal,
    },
    data() {
        return {
            currentView: null,
            tasks: [],
            selectedTask: null,
            isUpdateModalVisible: false,
            isCreateModalVisible: false,
        };
    },
    created() {
        this.updateCurrentView();
    },
    async mounted() {
        try {
            this.tasks = await fetchTasks();
        } catch (error) {
            toast.error("Erro ao carregar as tarefas");
            console.error("Erro ao carregar as tarefas:", error);
        }
    },
    methods: {
        async updateCurrentView() {
            this.currentView = this.$route.meta.view || "KanbanBoard";
        },
        changeView(view) {
            if (view != this.currentView) {
                this.$router.push({ name: view });
                this.currentView = this.$route.meta.view;
            }
        },
        openUpdateModal(task) {
            this.selectedTask = task;
            this.isUpdateModalVisible = true;
        },
        closeUpdateModal() {
            this.isUpdateModalVisible = false;
            this.selectedTask = null;
        },
        openCreateModal() {
            this.isCreateModalVisible = true;
        },
        closeCreateModal() {
            this.isCreateModalVisible = false;
        },
        createTask(newTask) {
            this.tasks.push(newTask);
        },
        updateTask(updatedTask) {
            const index = this.tasks.findIndex(
                (task) => task.id === updatedTask.id
            );
            if (index !== -1) {
                this.tasks[index] = updatedTask;
            } else {
                console.error(
                    "Tarefa não encontrada para atualização:",
                    updatedTask
                );
            }
        },
    },
    watch: {
        $route: "updateCurrentView",
    },
};
