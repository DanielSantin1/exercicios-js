// Função em HS é First-Class object(citizens)
// Higher-Order function

//criar de forma literal
function fun1() {/* TODO document why this function 'fun1' is empty */}

// Armazenar uma variavel
const fun2 =function ( ) { /* TODO document why this function 'fun1' is empty */}

//armzenar em um array
const array = [function(a,b){return a + b},fun1, fun2]
console.log(array[0](2,3))

//Armazenar um atributo de objeto
const obj = {}
obj.falar = function() {return 'Opa'}
console.log(obj.falar())

//Passar função como parametro
function run (fun){
    fun()
}

run(function(){console.log('Executando.... ')})

//Uma função pode retornar/conter uma função
function soma(a,b){
    return function(c){
        console.log(a+b+c)
    }
}
soma(2,3)(4)
const cincoMais = soma(2,3)
cincoMais(4)