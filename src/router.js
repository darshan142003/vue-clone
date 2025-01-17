import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import View from "./components/View.vue";
import Profile from "./components/Profile.vue"; // Import Profile component

const routes = [
  { path: "/", component: Home },
  { path: "/view/:id", component: View },
  { path: "/profile", component: Profile }, // Add this route for Profile
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
