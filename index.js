let nome = "Hércules"
let XP = 3000

if(XP<1000){
    let nivel = "Ferro"
}
else if(XP>1000 && XP<=2000){
    let nivel = "Bronze"
}
else if(XP>2000 && XP<=5000){
    let nivel = "Prata"
}
else if(XP>6000 && XP<=7000){
    let nivel = "Ouro"
}
else if(XP>7000 && XP<=8000){
    let nivel = "Platina diamante"
}
else if(XP>8000 && XP<=9000){
    let nivel = "Ascendente"
}
else if(XP>9000 && XP<=10000){
    let nivel = "imortal"
}
else{
    let nivel = "Radiante"
}

console.log("O herói de nome " + nome + " está no nível de " + nivel + ".") 