<script setup lang="ts">
const name = "DetailsView";

import { ref } from "vue";

import Button from "../components/button.vue";
import usePaymentRouter from "../composables/usePaymentMethodRouter";

const selectedMethod = ref<string | null>(null);
const paymentMethods = ["PIX", "Cartão de crédito", "Boleto"];

const { navigateToPaymentMethod } = usePaymentRouter();

const handleButtonClick = () => {
  if (selectedMethod.value) {
    navigateToPaymentMethod(selectedMethod.value);
  }
};
</script>

<template>
  <section>
    <h1>Escolha o método de pagamento</h1>
    <ul>
      <li v-for="method in paymentMethods" :key="method">
        <label
          class="radio-label"
          :class="{ selected: selectedMethod === method }"
          :for="method"
        >
          <input
            type="radio"
            :id="method"
            :value="method"
            v-model="selectedMethod"
          />
          {{ method }}
        </label>
      </li>
    </ul>
    <Button :clickHandler="handleButtonClick" buttonText="Prosseguir" />
  </section>
</template>

<style lang="scss" scoped>
@import "../components/styles/variables.scss";

section {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 455px;
  height: 445px;
  gap: 10%;
  padding: 3%;
  @media (max-width: 1000px) {
    width: 465px;
  }
  @media (max-width: 490px) {
    width: 190px;
  }
}

h1 {
  @each $property, $value in $title-text {
    #{$property}: $value;
  }
  margin-bottom: 10%;
}
ul {
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  gap: 1rem;
  width: 100%;
  margin-bottom: 10%;
}

.radio-label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 700;
  padding: 10px 20px;
  cursor: pointer;
  background-color: $background-li-default;
  color: $text-li-default;
  border-radius: 5px;
  border: 1px solid #ed7a7a;
  &:hover {
    background-color: $background-li-clicked;
    color: $text-li-clicked;
  }
  &:checked {
    background-color: #ed7a7a;
  }
  &.selected {
    background-color: $background-li-clicked;
    color: $text-li-clicked;
  }
}

.radio-label input[type="radio"] {
  order: 1;
  -webkit-appearance: none;
  width: 14px;
  height: 14px;
  border-radius: 90%;
  border: 2px solid #ed7a7a;
  outline: none;
  &:checked {
    background-color: #ffff;
  }
  &:hover {
    border-color: #ffffff;
    background-color: #ffffff;
  }
}
</style>
