
function Modela(palavra) {

    let palavraComprimida = '';
    let count = 1;

    for (let i = 0; i < palavra.length; i++) {
        if (palavra[i] === palavra[i + 1]) {
            count++;
        } else {
            palavraComprimida += (count > 9 ? '9' + palavra[i] + (count - 9) : count) + palavra[i];
            count = 1;
        }
    }

    return palavraComprimida;
}




function main() {
    const palavra = "AAAAAAAAAAAAAAABBAAAAAAAAAAAAAAAAAAACCCCDDDDEEEEEEEEEE";
    const novaPalavra = Modela(palavra);
    console.log(novaPalavra);
}

main();