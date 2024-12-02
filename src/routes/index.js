import { createRouter, createWebHistory } from "vue-router";
import HomePrincipal from "../views/HomePrincipal.vue";

const routes = [
  { path: "/", 
    name: "INGESTA", 
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
  {
    path: "/SonyMemoryToolsCheckout",
    name: "Retiro Memoria Sony",
    component: () => import("../views/SonyMemoryToolsCheckout.vue"),
  },

  {
    path: "/AddGuidelines",
    name: "Añadir Pauta",
    component: () => import("../views/AddGuidelines.vue")
  },

  {
    path: "/SeeGuidelines",
    name: "Ver/Editar Pautas",
    component: () => import ("../views/SeeGuidelines.vue")
  },
  {
    path: "/AddReport",
    name: "Agregar Reporte",
    component: () => import ("../views/AddReport.vue")
  },
  {
    path: "/SeeReport",
    name: "Ver Reportes",
    component: () => import ("../views/SeeReport.vue")
  }

];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
