import { createRouter, createWebHistory } from "vue-router";
import PaymentMethods from "../views/methods-view.vue";

import PixMethod from "../views/pix-method.vue";
import CreditMethod from "../views/credit-method.vue";
import BankSlipMethod from "../views/bankslip-method.vue";
import FinalStep from "../views/finalstep.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: PaymentMethods,
    },
    {
      path: "/pix",
      name: "PixMethod",
      component: PixMethod,
    },
    {
      path: "/credit",
      name: "CreditMethod",
      component: CreditMethod,
    },
    {
      path: "/bankslip",
      name: "BankSlipMethod",
      component: BankSlipMethod,
    },
    {
      path: "/finalstep",
      name: "FinalStep",
      component: FinalStep,
    },
  ],
});

export default router;
