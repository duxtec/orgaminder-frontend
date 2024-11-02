<template>
    <div v-if="visible" class="modal-overlay" @click.self="close">
        <div class="modal-content">
            <h2>
                <span class="text-gray font-normal">{{ localTask.id }}</span>
                <input type="text" v-model="localTask.title" />
            </h2>

            <input type="date" v-model="localTask.dueDate" />
            <textarea v-model="localTask.description"></textarea>
            <v-btn :class="localTask.status === 'pending' ? 'pending accent' : 'pending'" @click="setPending">
                Pendente
            </v-btn>
            <v-btn :class="localTask.status === 'completed' ? 'completed accent' : 'completed'" @click="setCompleted">
                Completa
            </v-btn>
            <v-btn @click="save" color="primary" class="mt-2" block>Salvar</v-btn>
            <v-btn @click="close" color="error" icon class="close-button" small>
                <v-icon size="24">mdi-close</v-icon>
            </v-btn>
        </div>
    </div>
</template>

<script>
import TaskUpdateModal from "./TaskUpdateModal";
export default TaskUpdateModal
</script>

<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    width: 80%;
    position: relative;
    z-index: 99999;
    width: min(600px, 100%);
    height: calc(100vh - var(--v-layout-top) - var(--v-layout-bottom) - 20px);
    margin: 5px;
    margin-top: 15px;
}

textarea,
input {
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.5);
    margin-top: 5px;
    border-radius: 10px;
    padding: 10px 5px
}

textarea {
    min-height: 30vh;
}

.text-gray {
    color: gray;
}

.font-normal {
    font-weight: normal;
}

.font-bold {
    font-weight: bold;
}

.close-button {
    position: absolute;
    top: 15px;
    right: 15px;
    border: none;
    font-size: 18px;
    cursor: pointer;
    aspect-ratio: 1/1;
    width: 36px;
    height: 36px;
}

.completed,
.pending {
    background: lightgray;
    color: white
}

.completed.accent {
    background: green;
    cursor: default;
}

.pending.accent {
    background: red;
    cursor: default;
}
</style>