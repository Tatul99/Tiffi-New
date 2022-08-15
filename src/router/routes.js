const routes = [
  // {
  //   path: "/",
  //   component: () => import("layouts/MainLayout.vue"),
  //   children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  // },
  // Always leave this as last one,
  // but you can also remove it
  // {
  //   path: "/:catchAll(.*)*",
  //   component: () => import("pages/ErrorNotFound.vue"),
  // },
  {
    path: "/",
    component: () => import("../pages/index.vue"),
    meta: {
      layout: "main-layout",
    },
  },
  {
    path: "/Aboute",
    component: () => import("../pages/Aboute.vue"),
    meta: {
      layout: "main-layout",
    },
  },
  {
    path: "/ForWoman",
    component: () => import("../pages/ForWomanPage.vue"),
    meta: {
      layout: "main-layout",
    },
  },
];

export default routes;
