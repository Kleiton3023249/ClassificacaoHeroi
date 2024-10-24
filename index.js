let herois = [];


const escolherheroi = () => {
    for (let i = 0; i < 5; i++) { 
        let nome = prompt("Digite o nome do herói: ");
        let xp = parseInt(prompt("Digite o XP do herói: "));


        herois.push({ nome: nome, xp: xp });
    }
};


function determinarNivel(xp) {
    if (xp < 1000) {
        return "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
        return "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        return "Prata";
    } else if (xp >= 5001 && xp <= 7000) {
        return "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
        return "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
        return "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        return "Imortal";
    } else {
        return "Radiante";
    }
}


escolherheroi();


for (let i = 0; i < herois.length; i++) {
    let heroi = herois[i];
    let nivel = determinarNivel(heroi.xp);
    console.log(`O Herói de nome ${heroi.nome} está no nível de ${nivel}`);
}
