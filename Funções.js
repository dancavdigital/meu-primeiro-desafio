function calcularIdade(nome, anoNascimento){
    const idade = 2026 - anoNascimento 
    console.log(" O aluno " + nome + " tem " +idade+ " anos de idade")

    if(idade >= 30 ){
        console.log("Voce ultrapasssou da idade")
    }
    else{
        console.log("PARABÉNS, VOCE FOI APROVADO")
    }
}

calcularIdade("Danilo", 1987)
calcularIdade("Rafael" , 2000)
calcularIdade("Carlos", 2007)



function teste(cred, deb){
    let saldo = deb - cred
    console.log("Uhuuu!!! Sobrou: " + saldo)
    return saldo
}

let FUNCAO = teste(2000, 510)

console.log(FUNCAO)



    if(saldo === 0 && saldo <= 200 ){
        console.log ("Cuidado! você não pode mais gastar dinheiro esse mes! ")
    }   else if (saldo > 200 && saldo <= 1000 ){
            console.log("Parabéns, esta melhorando, seu saldo é de ")}
            else{
                console.log("QUER ORGULHO, VOCE CONSEGUIU!!! ")
            }
        }



        function verificarDesconto(preco) {

    if (preco >= 50) {

        return preco * 0.10
    }

    
}

let desconto = verificarDesconto(10)


console.log(desconto)