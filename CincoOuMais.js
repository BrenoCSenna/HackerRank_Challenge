function solucao(precos) {
    let soma = 0;
    let maisBarato = precos[0];

    for (let itemAtual of precos) {
        soma += itemAtual;
        if (itemAtual < maisBarato) {
            maisBarato = itemAtual;
        }
    }
    if (precos.lengh >= 5) {
        console.log(soma - maisBarato);
    }
    else {
        console.log(soma);
    }
}

function processData(input) {
    solucao(input.trim().split(" ").filter(x => x).map(x => parseInt(x, 10)));
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});