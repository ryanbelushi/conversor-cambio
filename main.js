// Cotação de moedas do dia:
const USD = 5.48;
const EUR = 6.43;
const GBP =  7.42;

//Obtendo os elementos do usuario
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");

// Manipulando o input amount para receber somente numeros.
amount.addEventListener("input", () => {
  
  // Criando a regex
  const hasCharactersRegex = /\D+/g;

  // O metodo replace pega a expressao e procura dentro do texto pelo padrao passado, e a segunda parte ira substituir por uma string vazia, ou seja, por nada.
  amount.value = amount.value.replace(hasCharactersRegex, "");
});

//Pegando o valor do select para capturar a moeda. O evento abaixo captura o submit do formulario.
//Usando a forma de evento resumida
form.onsubmit = (event) => {
  //Removendo o comportamento padrao do formulario
  event.preventDefault();

  console.log(currency.value)
}