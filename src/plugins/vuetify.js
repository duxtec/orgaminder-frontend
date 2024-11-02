// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Vuetify
import { createVuetify } from "vuetify";

export default createVuetify({
    theme: {
        defaultTheme: "light", // Define o tema padrão
        themes: {
            light: {
                primary: "#1976D2", // Azul Material Design
                secondary: "#424242", // Cinza Material Design
                accent: "#82B1FF",
                error: "#FF5252",
                info: "#2196F3",
                success: "#4CAF50",
                warning: "#FFC107",
            },
            dark: {
                primary: "#1976D2", // Azul Material Design
                secondary: "#424242", // Cinza Material Design
                accent: "#82B1FF",
                error: "#FF5252",
                info: "#2196F3",
                success: "#4CAF50",
                warning: "#FFC107",
            },
        },
    },
});
