<<<<<<< HEAD
DESAFIO FRONT-END FLAME PAY

Proposta do desafio:
Analisar e implementar uma interface de um checkout de compras com dados fictícios, mas trabalhando com informações persistentes durante todos os processos do checkout.
Você deverá criar uma barra lateral contendo um mock de produtos com Nome, Descrição e Preço, realizando o cálculo dinamicamente e exibindo no valor total, também demonstrado na barra lateral.
Precisará criar um sistema de "steps" com as três etapas do checkout: Escolha do método de pagamento, Preenchimento dos dados (no caso de cartão de crédito) e página final.

Processos de cada pagamento:
- PIX:
  Ao prosseguir com o método de pagamento do pix, deverá ser exibida uma mensagem com um cronômetro de 10 minutos (para a expiração do QR Code) e um QR CODE para leitura e pagamento.
  Após o tempo se esgotar, gerar um novo código QR Code e resetar o cronômetro.

- Cartão de crédito:
  Após preencher os dados de pagamento, envia o usuário para a página de obrigado, com o nome do comprador sendo exibido.

- Boleto:
  Envia para uma página com o código do boleto.
  Após clicar em "Já fiz o pagamento, redirecionar para a página de obrigado."

Detalhes importantes:
  - Após o pagamento ser realizado, não é possível voltar para as etapas 1 e 2.
  - Os produtos listados na barra lateral serão exibidos a partir de um json mocado.
  - Se sinta a vontade para criar um Mock Server.

O que esperamos nesse teste:
  Uso do HTML5,
  CSS3,
  Vue.js 3,
  Boas práticas de desenvolvimento,
  Praticidade na entrega.

URL do Figma:
https://www.figma.com/file/zInBKxrqQiENp3Bq97ZhGm/Checkout-de-pagamentos?type=design&node-id=0%3A1&mode=design&t=eWkV4sYtCWgD9O39-1
=======
# flamepay

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```
>>>>>>> original/main
