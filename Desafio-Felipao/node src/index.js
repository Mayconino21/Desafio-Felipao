console.log("Jogo do entregador")
console.log("Jhow Ifood")
let nickname1 = "Jhow Ifood"
console.log ("Bem-vindo " + nickname1)
console.log("Ifood diz: Fala " + nickname1 + " Tudo bem mano? ")
console.log("Ifood diz: Tem entrega nova na área")
console.log("Ifood diz: Quanto mais entregas você fizer, mais XP você ganha")
console.log("Ifood diz: Qual o seu veículo?")
let veiculo = ["Bicicleta", "Bicicleta Elétrica", "Moto", "Carro"]
console.log(veiculo[0])
console.log("Ifood diz: Qual a sua Idade?")
let idade = 36
console.log(idade)
console.log("Ifood diz: Qual a sua cidade?")
let cidade = "Curitiba"
console.log(cidade)
console.log("Ifood diz: chega de enrolação " + nickname1 + " bora gaanhar XP!")
console.log("Ifood diz: então " + nickname1 + " pega sua/seu " + veiculo[0] + " e vamos entregar nas ruas de " + cidade)
console.log("Cada entrega é = a 1 XP, quanto mais entregas, mais XP você ganha")

let XP = 1000
    if(XP < 1000){
        nivel = "Ferro"
    } else if (XP >= 1001 && XP <= 2000)
    {
        nivel = "Bronze"
    } else if (XP >= 2001 && XP <=5000)
    {
        nivel = "Prata"
    } else if (XP >= 5001 && XP <= 7000)
    {
        nivel = "Ouro"
    } else if (XP >= 7001 && XP <= 8000)
    {
        nivel = "PLatina"
    } else if (XP >= 9001 && XP <= 9000)
    {
        nivel = "Ascendente"
    } else if (XP >= 9001 && XP <= 10000)
    {
        nivel = "Imortal"
    } else {
        nivel = "Radiante"
    }

    console.log("O Herói de nome " + nickname1 + " está no nível " + nivel)
