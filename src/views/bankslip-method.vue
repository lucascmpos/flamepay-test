<template>
  <section>
    <h1>Pagamento por boleto</h1>
    <form>
      <div>
        <label for="fullName">Nome completo</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          v-model="fullName"
          @input="clearErrorMessage"
          required
        />
      </div>
      <div>
        <label for="cpf">CPF do responsável</label>
        <input
          type="text"
          id="cpf"
          name="cpf"
          pattern="[0-9]{11}"
          v-model="cpf"
          @input="clearErrorMessage"
          required
        />
      </div>
    </form>
    <p class="text">
      Copie e cole o código no seu banco <br />
      Ou leve até uma lotérica da Caixa para realizar o pagamento!
    </p>
    <p class="bankSlipCode" ref="bankSlipCode">
      8949461894984 6515648916 6548964631668
    </p>
    <p class="copyCode" @click="copyCode">{{ copyText }}</p>
    <Button
      class="Button"
      :clickHandler="handleButtonClick"
      buttonText="Já fiz o pagamento"
    />
    <p class="error">{{ errorMessage }}</p>
  </section>
</template>

<script>
import Button from "../components/button.vue";
import { mapMutations } from "vuex";

export default {
  name: "BankSlip",
  components: {
    Button,
  },
  data() {
    return {
      copyText: "Clique aqui para copiar o código",
      buttonClicked: false,
    };
  },
  computed: {
    fullName: {
      get() {
        return this.$store.state.fullName;
      },
      set(value) {
        this.updateFullName(value);
      },
    },
    cpf: {
      get() {
        return this.$store.state.cpf;
      },
      set(value) {
        this.updateCpf(value);
      },
    },
    errorMessage() {
      if (this.buttonClicked && (!this.fullName || !this.cpf)) {
        return "Por favor, preencha todos os campos.";
      } else {
        return "";
      }
    },
  },
  methods: {
    ...mapMutations(["updateFullName", "updateCpf"]),
    handleButtonClick() {
      this.buttonClicked = true;
      if (this.fullName && this.cpf) {
        this.$router.push({ name: "FinalStep" });
      }
    },
    clearErrorMessage() {
      if (this.fullName && this.cpf) {
        this.errorMessage = "";
      }
    },

    copyCode() {
      const bankSlipCode = this.$refs.bankSlipCode.innerText.trim();
      navigator.clipboard.writeText(bankSlipCode).then(() => {
        this.copyText = "Código copiado!";
        setTimeout(() => {
          this.copyText = "Clique aqui para copiar o código";
        }, 1000);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../components/styles/variables.scss";

section {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 600px;
  height: 403px;
  padding: 6%;
}
label {
  font-size: 12px;
  margin-top: 1%;
}

input {
  border-radius: 3px;
  border: 1px solid #757575;
  width: 100%;
  height: 24px;
}
.text {
  text-align: center;
  font-size: 12px;
  font-weight: 400;
}
.bankSlipCode {
  padding: 10px;
  font-size: 12px;
  font-weight: 600;
  background: #ffffff;
  display: flex;
  align-content: center;
  justify-content: center;
}

.copyCode {
  color: #4891ff;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
}

Button {
  margin-top: 10%;
}

.error {
  @each $property, $value in $error-text {
    #{$property}: $value;
  }
}
</style>
