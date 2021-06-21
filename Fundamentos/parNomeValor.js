// Par nome/valor
const saudacao = 'Opa' // Contexto léxico 1

function exec() {
    const saudacao = 'Falaa'
    return saudacao
}

//Objetos são grupos alinhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        Logradouro: 'Rua muito Legal',
        numero: 132
    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)