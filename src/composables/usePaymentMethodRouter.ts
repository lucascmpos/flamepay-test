import { useRouter } from "vue-router";

export default function usePaymentMethodRouter() {
  const router = useRouter();

  function navigateToPaymentMethod(method: string) {
    switch (method) {
      case "PIX":
        router.push({ name: "PixMethod" });
        break;
      case "Cartão de crédito":
        router.push({ name: "CreditMethod" });
        break;
      case "Boleto":
        router.push({ name: "BankSlipMethod" });
        break;
    }
  }

  return {
    navigateToPaymentMethod,
  };
}
