import { createRouter, createWebHistory } from "vue-router";
import PaymentMethods from "../views/methods-view.vue";

import PixMethod from "../views/pix-method.vue";
import CreditMethod from "../views/credit-method.vue";
import BankSlipMethod from "../views/bankslip-method.vue";
import FinalStep from "../views/final-step.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "PaymentMethods",
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
      path: "/final-step",
      name: "FinalStep",
      component: FinalStep,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.name !== "PaymentMethods" && !from.name) {
    next({ name: "PaymentMethods" });
  } else {
    next();
  }
});

let paymentFinished = false;

router.beforeEach((to, from, next) => {
  if (to.name !== "FinalStep" && paymentFinished) {
    next({ name: "FinalStep" });
  } else if (to.name === "FinalStep") {
    paymentFinished = true;
    next();
  } else {
    next();
  }
});

export default router;
