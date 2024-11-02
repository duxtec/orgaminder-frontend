<template>
    <v-bottom-navigation app color="primary">
        <v-btn @click="showKanban" icon>
            <v-icon size="36">mdi-view-parallel</v-icon>
        </v-btn>
        <v-btn @click="showCalendar" icon>
            <v-icon size="36">mdi-calendar-month</v-icon>
        </v-btn>
        <v-btn @click="showAccount" icon>
            <v-icon size="36">mdi-account-circle</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn @click="openCreateModal" class="no-active-button" icon flat elevation="0">
            <v-icon size="36">mdi-plus</v-icon>
        </v-btn>
    </v-bottom-navigation>
</template>

<script>
export default {
    props: {
        openCreateModal: {
            type: Function,
            required: true,
        },
    },
    methods: {
        showKanban() {
            this.$emit('changeView', 'Kanban');
        },
        showCalendar() {
            this.$emit('changeView', 'Calendar');
        },
        showAccount() {
            this.$emit('changeView', 'Account');
        },
        logout() {
            localStorage.removeItem("jwt");
            this.$router.push({ name: 'Login' });
        }
    }
}
</script>

<style scoped>
.v-bottom-navigation,
.v-toolbar {
    background-color: #1976D2 !important;
    color: white
}

.v-btn {
    background-color: transparent !important;
    color: inherit !important;
    box-shadow: none !important;
}
</style>