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
        this.errorMessage = "Por favor, preencha corretamente os campos.";
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
          pattern="^[a-zA-ZÀ-ÿ\s]+$"
          v-model="fullName"
          required
        />
      </div>
      <div>
        <label for="cardNumber">Números do cartão</label>
        <input
          type="number"
          id="cardNumber"
          name="cardNumber"
          pattern="^\d{16}$"
          required
        />
      </div>
      <div>
        <label for="cpf">CPF do responsável pelo cartão</label>
        <input
          type="number"
          id="cpf"
          name="cpf"
          pattern="^\d{3}\.\d{3}\.\d{3}-\d{2}$"
          v-model="cpf"
          required
        />
      </div>
      <div class="validityCVV">
        <div class="lastInputs">
          <label for="cardValidity">Validade</label>
          <input
            type="number"
            id="cardValidity"
            name="cardValidity"
            pattern="^\d{2}/\d{2}$"
            required
          />
        </div>
        <div class="lastInputs">
          <label for="cvv">CVV</label>
          <input type="number" id="cvv" name="cvv" pattern="^\d{3}$" required />
        </div>
      </div>
    </form>
    <Button :clickHandler="handleButtonClick" buttonText="Realizar pagamento" />
    <p class="error">{{ errorMessage }}</p>
  </section>
</template>

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

.lastInputs {
  display: flex;
  flex-direction: column;
}

Button {
  margin-top: 5%;
  width: 70%;
}

.error {
  @each $property, $value in $error-text {
    #{$property}: $value;
  }
}
</style>
