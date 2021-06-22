function teste1(num) {
    if (num > 7)
        console.log(num)
    console.log('Final')
        //cuidado ao utilizar {} so pegara um comando e o outro jogará fora do if.
}

teste1(6)
teste1(8)

function teste2(num) {
    //não utilizar ';' na definição de um bloco if
    if (num > 7) {
        console.log(num)

    }
}
teste2(6)
teste2(8)