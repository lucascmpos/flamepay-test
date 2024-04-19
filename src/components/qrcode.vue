<template>
  <div>
    <canvas ref="qrcodeCanvas"></canvas>
  </div>
</template>

<script>
import QRCode from "qrcode.vue";

export default {
  name: "DQRCode",
  components: {
    QRCode,
  },
  data() {
    return {
      qrCodeData: "",
    };
  },
  methods: {
    generateQRCode() {
      this.qrCodeData = "Novos dados do QR Code";
    },
  },
  mounted() {
    this.generateQRCode();

    setInterval(() => {
      this.generateQRCode();
    }, 600000);
  },
};
</script>

<style scoped></style>
