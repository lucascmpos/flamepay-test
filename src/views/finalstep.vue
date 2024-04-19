<template>
  <section>
    <h1>Obrigado por comprar com a gente!</h1>
    <p>
      Olá, {{ fullName }}! Obrigado por comprar!<br />
      O QR CODE abaixo te dá 5% de desconto no site!
    </p>
    <div id="qrcode">
      <img v-if="qrCodeUrl" :src="qrCodeUrl" alt="QR Code" />
    </div>
    <Button
      :clickHandler="handleButtonClick"
      buttonText="Voltar ao marketplace"
    />
  </section>
</template>

<script>
import useQRCode from "../composables/useQRCode";
import Button from "../components/button.vue";

export default {
  name: "FinalStep",
  components: {
    Button,
  },
  data() {
    return {
      qrCodeUrl: "",
    };
  },
  computed: {
    fullName() {
      return this.$store.state.fullName;
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
};
</script>

<style lang="scss" scoped>
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 455px;
  height: 475px;
  @media (max-width: 1000px) {
    width: 465px;
  }
}
p {
  width: 100%;
  text-align: center;
}
Button {
  width: 60%;
  margin-top: 5%;
}
</style>
