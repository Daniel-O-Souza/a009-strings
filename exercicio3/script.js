//Crie a const para a frase aqui

const frase = ("Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\"")

console.log(frase)

// ITEM B: SUBSTITUINDO TERMOS:

const novaFrase = frase.replaceAll("verde","rosa").replaceAll("azul","laranja")

console.log(novaFrase)

// ITEM C: VERIFICAR SE NOVA STRING INCLUI VERDE E LARANJA:

const temVerde = novaFrase.includes("verde")
const temLaranja = novaFrase.includes("laranja")

console.log("A nova string inclui verde?", temVerde)
console.log("A nova string inclui laranja?", temLaranja)

// EXTRA:

const fraseMaiuscula = frase.replace("mas não deixe o gato sair", "MAS NÃO DEIXE O GATO SAIR")

console.log(fraseMaiuscula)