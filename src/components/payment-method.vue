<template>
  <section>
    <h1>Escolha o método de pagamento</h1>
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
    <button>Prosseguir</button>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
const name = "PaymentMethod";
const selectedMethod = ref<string | null>(null);

const paymentMethods = ["PIX", "Cartão de crédito", "Boleto"];
</script>

<style lang="scss">
@import "./styles/variables.scss";

ul {
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  gap: 10px;
}

.radio-label {
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  background-color: $background-li-default;
  color: $text-li-default;
  border-radius: 5px;
}

.radio-label input[type="radio"] {
  margin-right: 10px;
  order: 1;
}

li:hover .radio-label {
  background-color: $background-li-clicked;
  color: $text-li-clicked;
}

input[type="radio"]:checked + .radio-label {
  background-color: $background-li-clicked;
  color: $text-li-clicked;
}
</style>
