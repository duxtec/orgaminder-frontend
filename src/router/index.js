import { isAuth } from "@utils/auth";
import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../pages/LoginPage/LoginPage.vue";
import TasksPage from "../pages/TasksPage/TasksPage.vue";

const routes = [
    {
        path: "/login",
        name: "Login",
        component: LoginPage,
    },
    {
        path: "/tasks",
        name: "Tasks",
        component: TasksPage,
    },
    {
        path: "/calendar",
        name: "Calendar",
        component: TasksPage,
        meta: { view: "CalendarBoard" },
    },
    {
        path: "/kanban",
        name: "Kanban",
        component: TasksPage,
        meta: { view: "KanbanBoard" },
    },
    {
        path: "/account",
        name: "Account",
        component: TasksPage,
        meta: { view: "AccountBoard" },
    },
    {
        path: "/",
        name: "Home",
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if (isAuth()) {
        if (["Login", "Home"].includes(to.name)) {
            next({ name: "Kanban" });
        } else {
            next();
        }
    } else {
        if (!["Login", "Home"].includes(to.name)) {
            next({ name: "Login" });
        } else {
            next();
        }
    }
});

export default router;
