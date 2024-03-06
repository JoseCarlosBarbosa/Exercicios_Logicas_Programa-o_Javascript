function DoisNumeros(numeros, alvo) {
    const resultado = [];

    for (let i = 0; i < numeros.length; i++) {
        for (let j = 0; j < numeros.length; j++) {
            const soma = numeros[i] + numeros[j];
            if ((numeros[i] > 0 && numeros[j] < 0) || (numeros[i] < 0 && numeros[j] > 0)) {
                if (soma === alvo) {

                    resultado.push([numeros[i], numeros[j]]);
                }
            }

        }
    }

    return resultado;
}

function main() {
    const array = [3, 5, -4, 8, 11, 1, -1, 6];
    const alvo = 10;
    const SomaDosNumeros = DoisNumeros(array, alvo);
    console.log(SomaDosNumeros);
}

main();
