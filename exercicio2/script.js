const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

// ITEM A: REMOVENDO EXCESSO DE ESPAÇOS DA STRING:

const minhaString2 = minhaString.trim()

// ITEM B: EXIBINDO QUANTIDADE DE CARACTERES DAS STRINGS:

console.log(minhaString.length)
console.log(minhaString2.length)

// ITEM C: SUBSTITUINDO TRAÇOS NA STRING:

const stringSubstituida = minhaString.replace("________","\"sticioso\"")

console.log(stringSubstituida)