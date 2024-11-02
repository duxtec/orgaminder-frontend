const path = require("path");

const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
    transpileDependencies: true,

    pluginOptions: {
        vuetify: {
            // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
        },
    },

    configureWebpack: {
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "src"),
                "@components": path.resolve(__dirname, "src/components"),
                "@pages": path.resolve(__dirname, "src/pages"),
                "@plugins": path.resolve(__dirname, "src/plugins"),
                "@router": path.resolve(__dirname, "src/router"),
                "@services": path.resolve(__dirname, "src/services"),
                "@styles": path.resolve(__dirname, "src/styles"),
                "@utils": path.resolve(__dirname, "src/utils"),
            },
        },
    },
});
