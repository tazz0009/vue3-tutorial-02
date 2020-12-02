import { createRouter, createWebHashHistory } from "vue-router";
import DcHeros from "./components/DcHeros";
import Calendar from "./components/Calendar";
import Markdown from "./components/Markdown";
import Slider from "./components/Slider";
import Home from "./components/Home";

const routes = [
  { path: "/", component: Home },
  { path: "/dc-heros", component: DcHeros },
  { path: "/calendar", component: Calendar },
  { path: "/markdown", component: Markdown },
  { path: "/slider", component: Slider },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
