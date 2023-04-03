import { createApp } from "vue";
import App from "./App.vue";
import sequence from "./components/notes.vue";
import "./assets/main.css";
console.log(sequence.sequence);

createApp(App).mount("#app");
