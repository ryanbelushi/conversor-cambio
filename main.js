// Cotação de moedas do dia:
const USD = 5.48;
const EUR = 6.43;
const GBP =  7.42;

//Obtendo os elementos do formulario
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer"); //Pegando o footer dentro do main.
const description = document.getElementById("description");
const result = document.getElementById("result");

// Manipulando o input amount para receber somente numeros. O evento input consegue capturar os valores do input enquanto o user digita
amount.addEventListener("input", () => {
  
  // Criando a regex. O D indica que vamos buscar caracteres nao numericos, o + significa que caso haja uma sequencia ele ira tambem levar em consideraçao e o "g" significa que ele ira procurar em toda a string
  const hasCharactersRegex = /\D+/g;

  // O metodo replace pega a expressao e procura dentro do texto pelo padrao passado, e a segunda parte ira substituir por uma string vazia, ou seja, por nada.
  amount.value = amount.value.replace(hasCharactersRegex, "");
});

//Pegando o valor do select para capturar a moeda. O evento abaixo captura o submit do formulario.
//Usando a forma de evento resumida
form.onsubmit = (event) => {
  //Removendo o comportamento padrao do formulario
  event.preventDefault();

  //Atribuindo o valor aos parametros da funçao de acordo com o valor capturado no select
  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$");
      break;
    case "EUR":
      convertCurrency(amount.value, EUR, "EUR €");
      break;
    case "GBP":
    convertCurrency(amount.value, GBP, "£"); 
  }
};

//Function para converter a moeda:

function convertCurrency (amount, price, symbol) {
  //Usando o bloco try para realizar o calculo da conversão.
  try {
    description.textContent = `${symbol} 1 = R$ ${price}`
    const convertResult = amount * price;
    result.textContent = `${convertResult.toFixed(2)} Reais`
    footer.classList.add("show-result"); // Adicionando a classe para mostrar o footer.
  } catch (error) {
    footer.classList.remove("show-result"); //Remove a classe que exibe o footer caso aconteça algum erro.
    console.log(error);
    alert("Não foi possível realizar a conversão. Tente novamente mais tarde.")
  }
}