let resultado = vitoriaXderrota(1567, 1987)

let classificacao = nivelClass(resultado)

function vitoriaXderrota(vitorias, derrotas) {
    let ranking = vitorias - derrotas
    return ranking
}

function nivelClass(resultado){
    if (resultado <10){
        return " Ferro"
    }
    else if (resultado >= 11 && resultado <= 20){
        return " Bronze"    }
        else if (resultado >= 21 && resultado <= 50){
            return "Prata"    }
            else if (resultado >= 51 && resultado <= 80){
                return "Ouro"    }
                    else if (resultado >= 81 && resultado <= 90){
                        return " Diamente"    }
                          else if (resultado >= 91 && resultado <= 100){
                            return " Lendário"    }
                                else if (resultado >= 101 ){
                                     return " Imortal"
    }
}
console.log("O Heroi tem de saldo de " +resultado+ " vitórias e esta no nível " + classificacao)
    