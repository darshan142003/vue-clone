import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import View from "./components/View.vue";
import Profile from "./components/Profile.vue"; // Import Profile component
import ExpandedCard from "./components/ExpandedCard.vue"; // Import ExtendedCard component

const routes = [
  { path: "/", component: Home, name: "home" }, // Ensure name is 'home' for easy redirection
  { path: "/view/:id", component: View },
  { path: "/profile", component: Profile },
  { path: "/extended-card/:id", component: ExpandedCard, name: "extendedCard" }, // Add this route for ExtendedCard
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
