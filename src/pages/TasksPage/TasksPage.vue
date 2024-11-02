<template>
    <div>
        <Logged @changeView="changeView" :openCreateModal="openCreateModal" />
        <div class="p-0">
            <component :is="currentView" :tasks="tasks" :openUpdateModal="openUpdateModal"></component>
        </div>
    </div>
    <TaskUpdateModal :task="selectedTask" :visible="isUpdateModalVisible" @close="closeUpdateModal"
        @task-updated="updateTask" />
    <TaskCreateModal :visible="isCreateModalVisible" @close="closeCreateModal" @task-created="createTask" />
</template>

<script src="./TasksPage.js"></script>