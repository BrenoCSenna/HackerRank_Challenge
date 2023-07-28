//solucao(sequencia)
//processData(input)


let processData = "<";
let sequencia = 0;

for (let i = 0; i < processData.length; i++) {
    if (processData[i] == ">") {
        sequencia++;
        if (sequencia > 7) {
            sequencia -= 7;
        }
    }
    else {
        sequencia--;
        if (sequencia < 0) {
            sequencia += 7;
        }
    }
}



//for (let sequencia of processData) {
//  processData[sequencia] == ">" ? sequencia++ : sequencia;
//sequencia > 7 ? (sequencia -= 7) : sequencia;
//sequencia < 0 ? (sequencia += 7) : sequencia;
//}
console.log(sequencia);