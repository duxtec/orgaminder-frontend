<template>
    <v-form @submit.prevent="login">
        <v-text-field v-model="email" label="Email" prepend-icon="mdi-email" required></v-text-field>
        <v-text-field v-model="password" label="Password" type="password" prepend-icon="mdi-lock"
            required></v-text-field>
        <v-checkbox v-model="rememberMe" label="Lembrar de mim"></v-checkbox>

        <v-alert v-if="errorMessage" type="error" color="error" class="mb-5" dismissible>
            {{ errorMessage }}
        </v-alert>

        <v-btn type="submit" color="primary" block>Login</v-btn>
        <div class="d-flex flex-column mt-10 p-10">
            <v-btn text @click="goToSignup">Criar uma conta</v-btn>
            <v-btn text @click="forgotPassword" class="mt-2">Esqueceu a senha?</v-btn>
        </div>
    </v-form>
</template>

<script src="./LoginForm.js"></script>