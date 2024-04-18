<template>
  <section class="method-section">
    <h1 class="title">Escolha o método de pagamento</h1>

    <ul>
      <li v-for="method in paymentMethods" :key="method">
        <label class="radio-label" :for="method">
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

<script setup lang="ts">
import { ref } from "vue";
import Button from "../components/button.vue";
const name = "PaymentMethod";
const selectedMethod = ref<string | null>(null);

const paymentMethods = ["PIX", "Cartão de crédito", "Boleto"];
</script>

<style lang="scss">
@import "../components/styles/variables.scss";

.method-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10%;
  border-radius: 0px, 10px;
  width: 455px;
  height: 365px;
  gap: 10%;
}

.title {
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
    background-color: #ed7a7a;
  }
  &:hover {
    border-color: #ffffff;
  }
}
</style>
