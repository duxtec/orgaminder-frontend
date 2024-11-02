<template>
    <div class=" p-0" :style="{ maxHeight: '100vh', overflowY: 'auto' }">
        <v-app-bar app>
            <v-toolbar-title app color="primary">Conta</v-toolbar-title>
        </v-app-bar>
        <div class="fill-width d-flex">
            <v-btn @click="logout">
                <v-icon size="36">mdi-logout</v-icon> Sair
            </v-btn>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        tasks: {
            type: Array,
            required: true,
        },
        openUpdateModal: {
            type: Function,
            required: true,
        },
    },
    computed: {
        pendingTasks() {
            return this.tasks.filter(task => task.status === 'pending');
        },
        completedTasks() {
            return this.tasks.filter(task => task.status === 'completed');
        },
        isMobile() {
            console.log(window.innerWidth)
            return window.innerWidth <= 768;
        },
    },
    methods: {
        logout() {
            localStorage.removeItem("jwt");
            this.$router.push({ name: 'Login' });
        }
    }
};
</script>

<style scoped>
.v-toolbar {
    background-color: #1976D2 !important;
    color: white
}

.v-btn {
    margin-top: 10px;
    width: 100%;
}
</style>