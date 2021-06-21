isAtivo = true
console.log(isAtivo)

Isativo = 1
console.log(!!isAtivo)


console.log('os verdadeiros....')

console.log(!!3)
console.log(!!-1)
console.log(!!'  ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('Os falsos....')
console.log(!!0)
console.log(!!'')
console.log(!!NaN)
console.log(!!null)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('Para finalizar')
console.log('' || null || 0 || ' ')


let nome = '' // Caso não coloque o nome irá imprimir o valor abaixo.
console.log(nome || 'Desconhecido')