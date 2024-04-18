<template>
  <main>
    <DetailsView />
    <section class="payment-section">
      <div class="progress-div">
        <p class="progress-number">1</p>
        <div class="circle" />
        <div class="circle" />
        <div class="circle" />
        <p class="progress-number">2</p>
        <div class="circle" />
        <div class="circle" />
        <div class="circle" />
        <p class="progress-number">3</p>
      </div>

      <RouterView />
    </section>
  </main>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import DetailsView from "./views/details-view.vue";
</script>

<style lang="scss">
@import "./components/styles/variables.scss";

main {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.payment-section {
  display: flex;
  flex-direction: row;
  padding: 2%;
  align-items: center;
  background: $payment-background;
  border-radius: 0px 10px 10px 0px;
}
.progress-div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding-right: 10px;
  border-right: 1px solid #d9d9d9;
}
.progress-number {
  display: flex;
  background: #cfcfcf;
  width: 24px;
  height: 24px;
  border-radius: 100%;
  justify-content: center;
  align-items: center;
  color: #ffff;
  font-size: 11px;
  font-weight: 700;
}

.circle {
  background: #cfcfcf;
  width: 6px;
  height: 6px;
  border-radius: 100%;
}
</style>
