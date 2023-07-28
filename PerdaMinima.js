//solucao(precos)
//processData(input) {
//const precos = input.split(" ").map(x => parseInt(x));
//solucao(precos);

//verificar o menor índice de um elemento menos outro seguinte


let precos = [5, 10, 3];
let perdaMinima = 999999999;

for (let i = 0; i < precos.length; i++) {
    let j = i + 1;
    for (j; j < precos.length; j++) {
        if (j > i) {
            if ((precos[i] - precos[j]) < perdaMinima & (precos[i] - precos[j]) >= 0) {
                perdaMinima = (precos[i] - precos[j]);
            }
            else {

            }
        }
    }
}
console.log(perdaMinima);