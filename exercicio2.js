function quick(vet, esq, dir) {
    let pivo = esq, i, ch, j;
    for (i = esq + 1; i <= dir; i++) {
        j = i;
        if (vet[j] < vet[pivo]) {
            ch = vet[j];
            while (j > pivo) {
                vet[j] = vet[j - 1];
                j--;
            }
            vet[j] = ch;
            pivo++;
        }
    }
    if (pivo - 1 >= esq) {
        quick(vet, esq, pivo - 1);
    }
    if (pivo + 1 <= dir) {
        quick(vet, pivo + 1, dir);
    }
}

function QtdAluno(array) {
    let conta = 0;
    for (let i = 0; i < array.length; i++) {
        conta++;
    }
    return conta;
}

function RetornaVF(blackUnirforme, orangeUniforme, qtdAlunoBlack, qtdAlunoOrange) {
    let i = 0;
    let k = 0;
    if (blackUnirforme[0] < orangeUniforme[0]) {
        if (qtdAlunoBlack === qtdAlunoOrange) {

            while (i != qtdAlunoBlack) {
                if (blackUnirforme[i] < orangeUniforme[i]) {
                    k++;
                }
                i++;
            }
        }
    }
    if (k === qtdAlunoBlack && k == qtdAlunoOrange) {
        return true;
    } else return false;
}


function main() {
    let blackUnirforme = [150, 179, 149, 152, 154];
    let orangeUniforme = [162, 181, 151, 160, 170];

    quick(blackUnirforme, 0, blackUnirforme.length - 1);
    quick(orangeUniforme, 0, orangeUniforme.length - 1);

    let qtdAlunoBlack = QtdAluno(blackUnirforme);
    let qtdAlunoOrange = QtdAluno(orangeUniforme);

    let possivelFoto = RetornaVF(blackUnirforme, orangeUniforme, qtdAlunoBlack, qtdAlunoOrange);

    console.log(possivelFoto);

}



main();