
#Exercícios de Lógica de Programação em JavaScript

##EXERCICIO 1

Este é um exercício de lógica de programação em Java que visa praticar o conceito de soma de elementos em um vetor e verificar se essa soma corresponde a um valor de busca especificado.

Descrição do Problema
Dado um vetor de números aleatórios, tanto positivos quanto negativos, e um valor de busca, o programa deve comparar a soma dos números no vetor e verificar se ela é igual ao valor de busca. 
O programa deve retornar os números somados que resultam no valor de busca.

Funcionamento do Programa

O programa realiza as seguintes etapas:

Recebe como entrada um vetor de números aleatórios e um valor de busca.
Percorre o vetor e realiza a soma apenas dos números positivos e negativos, ignorando os valores nulos.
Verifica se a soma resultante é igual ao valor de busca.
Se a soma for igual ao valor de busca, retorna os números somados que resultam nesse valor.
Caso contrário, indica que não há uma combinação de números no vetor que resulte no valor de busca.



##EXERCICIO 2
#Exercício: Arranjo para Foto de Turma

Neste exercício, você será desafiado a organizar uma turma para uma foto de classe, 
seguindo certas regras específicas. Vamos detalhar o problema e, em seguida, apresentar a descrição da entrada e saída esperadas, bem como um exemplo.

Descrição do Problema
É o dia da foto da turma em uma escola local e você foi o fotógrafo escolhido para tirá-las. A classe que você irá fotografar tem um número par de alunos, todos usando uniformes pretos ou laranjas em iguais quantidades. Metade da turma está com uniformes pretos e metade com uniformes laranjas. Você é responsável por arranjar os alunos em duas filas para a fotografia, uma na frente e outra atrás. Cada fila deve conter o mesmo número de alunos e deve preencher os seguintes requisitos:

Todos os alunos usando uniforme preto devem estar na mesma fila.
Todos os alunos usando uniforme laranja devem estar na mesma fila.
Todos os alunos na fila de trás devem ser estritamente mais altos que o aluno diretamente em sua frente na fila da frente.
Você recebe dois arrays de entrada: um contendo a altura dos alunos com uniformes pretos e outro contendo a altura dos alunos com uniformes laranjas. Esses arrays sempre terão o mesmo tamanho e cada altura (em cm) será um inteiro positivo. Escreva uma função que retorne true ou false caso seja possível ou não tirar a fotografia de uma determinada turma seguindo os parâmetros estabelecidos. Você pode assumir que cada turma tem ao menos dois alunos.

Exemplo de Entrada e Saída
Exemplo de Entrada:
java
Copy code
blackUniformHeights = [150, 179, 149, 152, 154] 
orangeUniformHeights = [162, 181, 151, 160, 170]
Exemplo de Saída:
arduino
Copy code
true


##EXERCICIO 3 

# Compressão de String

Esta é uma simples aplicação em JavaScript para comprimir strings seguindo as regras especificadas.

## Descrição

A aplicação consiste em uma função JavaScript chamada `Modela` que aceita uma string como entrada e retorna a versão comprimida da string. A compressão segue as seguintes regras:

- Se uma sequência de caracteres é repetida, ela é substituída pelo número de repetições seguido do caractere.
- Se a sequência de caracteres repetidos for maior que 9, apenas os primeiros 9 são contados, e o restante é tratado separadamente.

## Exemplo de Uso

const palavra = "AAAABBBBBCCCC";
const novaPalavra = Modela(palavra);
console.log("Palavra original:", palavra); // Output: AAAABBBBBCCCC
console.log("Nova palavra comprimida:", novaPalavra); // Output: 4A5B4C
