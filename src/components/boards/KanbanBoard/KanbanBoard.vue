<template>
    <div class=" p-0" :style="{ maxHeight: '100vh', overflowY: 'auto' }">
        <v-app-bar app>
            <v-toolbar-title app color="primary">Kanban Board</v-toolbar-title>
        </v-app-bar>
        <div class="fill-width d-flex"
            :style="{ height: 'calc(100vh - var(--v-layout-top) - var(--v-layout-bottom)', overflowY: 'auto' }"
            :class="{ 'flex-column': isMobile, 'flex-row': !isMobile }">
            <v-col class="pending-tasks" :class="{ 'half-height': isMobile, '': !isMobile }" cols="12" md="6" lg="6">
                <h3>Pendentes</h3>
                <v-row justify="space-evenly" class="ma-1" cols="12" md="5" lg="3">
                    <v-col cols="12" md="12" lg="3" class="task ma-1" @click="openUpdateModal(task)"
                        v-for="task in pendingTasks" :key="task.id">
                        <p>{{ task.title }}</p>
                    </v-col>
                </v-row>
            </v-col>

            <v-col class="completed-tasks" :class="{ 'half-height': isMobile, '': !isMobile }" cols="12" md="6" lg="6">
                <h3>Concluídas</h3>
                <v-row justify="space-evenly" class="ma-1">
                    <v-col cols="12" md="12" lg="3" class="task ma-1" @click="openUpdateModal(task)"
                        v-for="task in completedTasks" :key="task.id">
                        <p>{{ task.title }}</p>
                    </v-col>
                </v-row>
            </v-col>
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
};
</script>

<style scoped>
.v-bottom-navigation,
.v-toolbar {
    background-color: #1976D2 !important;
    color: white
}

.pending-tasks,
.completed-tasks {
    padding: 10px;
    overflow-y: auto;

    h3 {
        text-align: center;
    }
}

.pending-tasks .v-row,
.completed-tasks .v-row {
    flex: 0 0 auto;
}

.pending-tasks .task,
.completed-tasks .task {
    height: fit-content;
}

.half-height {
    flex: 1 1 50%;
    height: calc(100vh - var(--v-layout-top) - var(--v-layout-bottom));
    overflow-y: auto;
    display: flex;
    flex-direction: column;
}


.pending-tasks {
    background-color: lightpink;

    h3 {
        color: darkred
    }
}

.completed-tasks {
    background-color: lightgreen;

    h3 {
        color: green
    }
}

.task {
    width: 100%;
    padding: 10px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 10px;
    margin-top: 5px;
    cursor: pointer;
}
</style>