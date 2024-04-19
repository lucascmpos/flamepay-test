<template>
  <section>
    <h1>Preencha os dados do pagamento</h1>
    <form>
      <div>
        <label for="fullName">Nome completo</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          v-model="fullName"
          required
        />
      </div>
      <div>
        <label for="cardNumber">Números do cartão</label>
        <input type="text" id="cardNumber" name="cardNumber" required />
      </div>
      <div>
        <label for="cpf">CPF do responsável pelo cartão</label>
        <input type="text" id="cpf" name="cpf" v-model="cpf" required />
      </div>
      <div class="validityCVV">
        <div class="inputGroup">
          <label for="cardValidity">Validade</label>
          <input type="text" id="cardValidity" name="cardValidity" required />
        </div>
        <div class="inputGroup">
          <label for="cvv">CVV</label>
          <input type="text" id="cvv" name="cvv" required />
        </div>
      </div>
    </form>
    <Button
      class="Button"
      :clickHandler="handleButtonClick"
      buttonText="Realizar pagamento"
    />
    <p class="error">{{ errorMessage }}</p>
  </section>
</template>

<script>
import Button from "../components/button.vue";

import { mapMutations } from "vuex";

export default {
  name: "CreditMethod",
  components: {
    Button,
  },
  data() {
    return {
      errorMessage: "",
    };
  },
  methods: {
    ...mapMutations(["updateFullName", "updateCpf"]),
    handleButtonClick() {
      const fullName = document.getElementById("fullName").value;
      const cardNumber = document.getElementById("cardNumber").value;
      const cpf = document.getElementById("cpf").value;
      const cardValidity = document.getElementById("cardValidity").value;
      const cvv = document.getElementById("cvv").value;

      if (fullName && cardNumber && cpf && cardValidity && cvv) {
        this.$router.push({ name: "FinalStep" });
      } else {
        this.errorMessage = "Por favor, preencha todos os campos.";
      }
    },
    clearErrorMessage() {
      const fullName = document.getElementById("fullName").value;
      const cardNumber = document.getElementById("cardNumber").value;
      const cpf = document.getElementById("cpf").value;
      const cardValidity = document.getElementById("cardValidity").value;
      const cvv = document.getElementById("cvv").value;

      if (fullName && cardNumber && cpf && cardValidity && cvv) {
        this.errorMessage = "";
      }
    },
  },
  mounted() {
    const inputFields = document.querySelectorAll('input[type="text"]');
    inputFields.forEach((input) => {
      input.addEventListener("input", this.clearErrorMessage);
    });
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
  },
};
</script>

<style lang="scss" scoped>
@import "../components/styles/variables.scss";

section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 435px;
  height: 475px;
  @media (max-width: 1000px) {
    width: 465px;
  }
  @media (max-width: 490px) {
    width: 200px;
  }
}

section > h1 {
  margin-bottom: 10%;
}
form > div {
  margin-bottom: 10px;
}

.inputGroup {
  display: flex;
  flex-direction: column;
}

input {
  border-radius: 3px;
  border: 1px solid #757575;
  width: 100%;
  height: 28px;
  @media (max-width: 490px) {
    width: 80%;
  }
}

label {
  font-size: 10px;
  font-weight: 600;
}

#cardValidity {
  width: 60%;
}

#cvv {
  width: 20%;
}

#cpf {
  margin-bottom: 5%;
}

.validityCVV {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

.Button {
  margin-top: 5%;
  width: 70%;
}

.error {
  @each $property, $value in $error-text {
    #{$property}: $value;
  }
}
</style>
