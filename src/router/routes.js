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
  {
    path: "/ForMan",
    component: () => import("../pages/ForMan.vue"),
    meta: {
      layout: "main-layout",
    },
  },
  {
    path: "/Discounts",
    component: () => import("../pages/Discounts.vue"),
    meta: {
      layout: "main-layout",
    },
  },
  {
    path: "/New",
    component: () => import("../pages/NewColections.vue"),
    meta: {
      layout: "main-layout",
    },
  },
];

export default routes;
