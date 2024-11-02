<template>
    <v-container fluid class="fill-height" :style="{
        backgroundImage: `url(${require('../../assets/background2.png')})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
    }">
        <v-row class="fill-height">
            <v-col cols="12" md="7" class="d-flex align-center justify-center">
                <div class="flex-grow-1">
                    <div class="links"></div>
                </div>
            </v-col>

            <v-col cols="12" md="5" class="d-flex align-center justify-center">
                <v-card class="flex-grow-1">
                    <v-card-title class="text-h5">OrgaMinder - Login</v-card-title>
                    <v-card-text>
                        <LoginForm />
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import LoginForm from '@components/forms/LoginForm/LoginForm.vue';
import backgroundImage from "../../assets/background2.png";

export default {
    components: {
        LoginForm
    },
    data() {
        return {
            backgroundImage
        };
    },
};
</script>
