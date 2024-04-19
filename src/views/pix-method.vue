<template>
  <section class="pix-section">
    <h1 class="title">Pagamento via PIX</h1>
    <h2 class="desc">Faça a leitura do QR CODE para finalizar o pagamento!</h2>
    <div id="qrcode">
      <img v-if="qrCodeUrl" :src="qrCodeUrl" alt="QR Code" />
    </div>
    <p class="timer" v-if="remainingTime > 0">
      Faltam {{ formatTime(remainingTime) }} para expirar
    </p>
    <Button :clickHandler="handleButtonClick" buttonText="Já fiz o pagamento" />
  </section>
</template>

<script>
import Button from "../components/button.vue";
import useQRCode from "../composables/useQRCode";

export default {
  name: "PixMethod",
  components: {
    Button,
  },
  data() {
    return {
      qrCodeUrl: "",
      expirationTime: 10 * 60,
      remainingTime: 0,
      timerInterval: null,
    };
  },
  methods: {
    handleButtonClick() {},
    updateRemainingTime() {
      this.remainingTime = Math.max(
        0,
        this.expirationTime -
          Math.floor((Date.now() - this.qrCodeGeneratedTime) / 1000)
      );
    },
    formatTime(totalSeconds) {
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;
      return `${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`;
    },
  },
  mounted() {
    const qrCodeContent = "https://github.com/vitorlbarroso/teste-front-flame";
    const qrCodeOptions = {
      errorCorrectionLevel: "H",
      type: "image/jpeg",
      quality: 0.3,
      margin: 1,
      width: 200,
      color: {
        dark: "#000000",
        light: "#ffffff",
      },
    };

    const { generateQRCode } = useQRCode(qrCodeContent, qrCodeOptions);

    generateQRCode().then((url) => {
      this.qrCodeUrl = url;
      this.qrCodeGeneratedTime = Date.now();
      this.updateRemainingTime();
      this.timerInterval = setInterval(this.updateRemainingTime, 1000);
    });

    setInterval(async () => {
      try {
        this.qrCodeUrl = await generateQRCode();
        this.qrCodeGeneratedTime = Date.now();
        this.updateRemainingTime();
      } catch (error) {
        console.error("Error generating QR code:", error);
      }
    }, 600000);
  },
  beforeDestroy() {
    clearInterval(this.timerInterval);
  },
};
</script>

<style lang="scss">
@import "../components/styles/variables.scss";

.pix-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: 435px;
  padding: 6%;
}
.title {
  @each $property, $value in $title-text {
    #{$property}: $value;
  }
}

.desc {
  width: 100%;
  font-size: 12px;
  font-weight: 600;
  color: #3a3a3a;
}
.timer {
  font-size: 12px;
  font-weight: 600;
  color: #09a42b;
}
#qrcode {
  margin: 3% 0 0 0;
}
</style>
