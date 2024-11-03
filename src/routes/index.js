import { createRouter, createWebHistory } from "vue-router";
import HomePrincipal from "../views/HomePrincipal.vue";

const routes = [
  { path: "/", 
    name: "Menú Principal", 
    component: HomePrincipal },
  {
    path: "/retiroherramientas",
    name: "Retiro de Herramientas",
    component: () => import("../views/LendTools.vue"),
  },
  {
    path: "/devolucionherramientas",
    name: "Devolución de Herramientas",
    component: () => import("../views/ToolsReturns.vue"),
  },
  {
    path: "/menupautas",
    name: "Menú de Pautas",
    component: () => import("../views/GuidelinesMenu.vue"),
  },
  {
    path: "/administradorherramientas",
    name: "Administrador de Herramientas",
    component: () => import("../views/ToolManager.vue"),
  },
  {
    path: "/averias",
    name: "Averías / Reportes",
    component: () => import("../views/ReportMenu.vue"),
  },
  {
    path: "/configuracion",
    name: "Configuración",
    component: () => import("../views/UserConfiguration.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
