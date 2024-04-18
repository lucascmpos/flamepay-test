<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <section>
    <h1>Detalhes da compra</h1>
    <div>
      <h2>Produtos: R$ 200,00</h2>
      <h2>Total: R$ 850,00</h2>
    </div>
    <div>
      <div>
        <h3>Camisa do Flamengo</h3>
        <p>Camisa oficial do flamengo</p>
      </div>
      <h3>R$ 250,00</h3>
    </div>
  </section>

  <RouterView />
</template>
