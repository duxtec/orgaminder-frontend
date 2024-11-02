import { auth } from "@/firebase";
import axios from "axios";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
    setup() {
        const email = ref("");
        const password = ref("");
        const rememberMe = ref(false);
        const errorMessage = ref("");
        const router = useRouter();

        const login = async () => {
            try {
                const userCredential = await signInWithEmailAndPassword(
                    auth,
                    email.value,
                    password.value
                );
                const idToken = await userCredential.user.getIdToken();

                // Etapa 2: Envia o token para o backend
                const response = await axios.post(
                    "http://localhost:3001/api/auth/login",
                    { email: email.value },
                    {
                        headers: {
                            Authorization: `Bearer ${idToken}`,
                        },
                    }
                );

                if (response.status === 200) {
                    const { token } = response.data;
                    localStorage.setItem("jwt", token);
                    router.push({ name: "Tasks" });
                }
            } catch (error) {
                errorMessage.value =
                    "Login failed. Please check your email and password.";
            }
        };

        return {
            email,
            password,
            login,
            rememberMe,
            errorMessage,
        };
    },
};
