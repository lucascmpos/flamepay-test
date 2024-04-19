<template>
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
</template>

<script>
export default {
  name: "ProgressBar",
};
</script>

<style lang="scss">
.progress-div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding-right: 2%;
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
