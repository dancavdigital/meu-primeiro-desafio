


let NomeExperiencia = [ "DTUNDER", 9500]

if (NomeExperiencia[1] <= 1000 ){
    console.log("O Heroi " + NomeExperiencia[0] + " Possui XP Nível Ferro")
}
else if (NomeExperiencia[1] >= 1001 && NomeExperiencia[1] <= 2000 ){
    console.log("O Heroi " + NomeExperiencia[0] +" Possui XP Nível Bronze")
}
else if (NomeExperiencia[1] >= 2001 && NomeExperiencia[1] <= 5000 ){
    console.log("O Heroi " + NomeExperiencia[0] +" Possui XP Nível Ouro")
}
else if (NomeExperiencia[1] >= 5001 && NomeExperiencia[1] <= 8000 ){
    console.log("O Heroi " + NomeExperiencia[0] +" Possui XP Nível Platina Platina")
}
else if (NomeExperiencia[1] >= 8001 && NomeExperiencia[1] <= 9000 ){
    console.log("O Heroi " + NomeExperiencia[0] +" Possui XP Nível Platina Ascendente")
}
else if (NomeExperiencia[1] >= 9001 && NomeExperiencia[1] <= 10000 ){
    console.log("O Heroi " + NomeExperiencia[0] +" Possui XP Nível Platina Imortal")
}
else if(NomeExperiencia[1] > 10000 )
    console.log("O Heroi " + NomeExperiencia[0] +" Possui XP Nível Platina Radiante")