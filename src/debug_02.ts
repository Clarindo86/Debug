function imprimirNumeros(): void {
for (let i = 1; i < 10; i++) {
console.log(i);
}
}
imprimirNumeros();

//Aí existe um erro de lógica, porque i < 10 para no número 9.





function contarAte5(): void {
    let contador = 0;

    while (contador !== 5) {
        console.log(contador);
        contador = contador + 2;
    }
}

contarAte5();

//O erro está na condição do while 
//O contador começa em 0 e aumenta de 2 em 2. Portanto, ele nunca será igual a 5




function imprimirNomes(): void {
    const nomes: string[] = ["Ana", "Bruno", "Carla"];

    for (let i = 0; i <= nomes.length; i++) {
        console.log(nomes[i]);
    }
}

imprimirNomes();

//O erro está na condição do for O operador <= significa “menor ou igual a”.


function somarPrecos(): number {
const precos: number[] = [10, 25, 30, 15];
let total = 0;
for (let preco in precos) {
total += preco;
}
return total;
}
console.log(somarPrecos());

//O for...in percorre os índices do array, e não os valores dos preços.


function dispararAvisos(): void {
    for (var i = 0; i < 3; i++) {
        setTimeout(() => {
            console.log("Aviso " + i);
        }, 1000);
    }
}

dispararAvisos();

//Esse código em TypeScript demonstra um problema comum com var dentro de um for usando setTimeout.


function imprimirTriangulo(): void {
const totalLinhas = 5;
for (let linha = 1; linha <= totalLinhas; linha++) {
let linhaTexto = "";
for (let coluna = 1; coluna < linha; coluna++) {
linhaTexto += "*";
}
console.log(linhaTexto);
}
}
imprimirTriangulo();


//O problema está na condição do segundo for:  coluna < linha, mas, para imprimir o triângulo com 5 linhas, precisa incluir a coluna atual.


function encontrarPrimeiroPar(): void {
const numeros: number[] = [7, 9, 3, 11, 8, 15, 4];
for (let i = 0; i < numeros.length; i++) {
if (numeros[i] % 2 !== 0) {
continue;
}
console.log("Primeiro par encontrado: " + numeros[i]);
}
}
encontrarPrimeiroPar();


//O problema está no continue, que pula os números ímpares e continua o loop. Para encontrar somente o primeiro par


interface ItemCarrinho {
nome: string;
quantidadeEstoque: number;
}
function validarCarrinho(): void {
const carrinho: ItemCarrinho[] = [
{ nome: "Teclado", quantidadeEstoque: 3 },
{ nome: "Mouse", quantidadeEstoque: 0 },
{ nome: "Monitor", quantidadeEstoque: 5 }
];
carrinho.forEach((item) => {
if (item.quantidadeEstoque === 0) {
console.log("Carrinho invalido");
return;
}
});
console.log("Carrinho valido");
}
validarCarrinho();

//O problema está no return dentro do forEach(). Em JavaScript e
//TypeScript, ele encerra apenas a execução daquela repetição da função, não a função validarCarrinho() inteira.


function contagemRegressiva(): void {
let numero = 3;
do {
console.log(numero);
numero--;
} while (numero >= 0);
console.log("Fim!");
}
contagemRegressiva();

//o codigo está correto 

function calcularProduto(): number {
const numeros: number[] = [2, 3, 4, 5];
let produto = 0;
for (let i = 0; i < numeros.length; i++) {
produto *= numeros[i];
}
return produto;
}
console.log(calcularProduto());

//o erro está na multiplicação (*=), mas, como o valor inicial é 0, o resultado continuará sendo zero.

function imprimirTabuadaDe7(): void {
const numero = 7;
for (let i = 1; i <= 10; i++) {
const resultado = numero * i;
console.log(numero + " x " + i + " = " + resultado);
i++;
}
}
imprimirTabuadaDe7();

//i++ no for, então essa linha adicional faz o contador avançar de 2 em 2, imprimindo apenas os múltiplos ímpares da tabuada.


function removerPares(): number[] {
const numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
for (let i = 0; i < numeros.length; i++) {
if (numeros[i] % 2 === 0) {
numeros.splice(i, 1);
}
}
return numeros;
}
console.log(removerPares());

//- numeros[i] % 2 === 0 verifica se o número é par.
//splice(i, 1) remove o número da posição i.
//Quando você remove um elemento, os seguintes mudam de posição. Como o for incrementa i, ele pode pular o próximo número par.
//Por exemplo, ao remover o 2, o 4 passa para a posição do 2. Porém, o contador avança e pode deixar de verificar o 4.


function imprimirDoFim(): void {
const numeros: number[] = [10, 20, 30, 40];
for (let i = numeros.length; i >= 0; i--) {
console.log(numeros[i]);
}
}
imprimirDoFim();

//O erro está no início do for começou com numeros.length, mas o último índice de um array é numeros.length - 1.

function imprimirGrade(): void {
for (let i = 0; i < 3; i++) {
for (let i = 0; i < 3; i++) {
console.log("(" + i + ", " + i + ")");
}
}
}
imprimirGrade();


// O erro está nos dois for:  a variável i nos dois loops e também colocou i nas duas posições da
//coordenada. Para imprimir uma grade 3x3, use linha e coluna.

function coletarPares(): number[] {
const candidatos: number[] = [1, 3, 5, 7, 9, 11];
const pares: number[] = [];
let i = 0;
while (pares.length < 5) {
if (candidatos[i] % 2 === 0) {
pares.push(candidatos[i]);
}
i++;
}
return pares;
}
console.log(coletarPares());

//O código tem um erro que provoca um loop infinito.


function imprimirComIndice(): void {
const nomes: string[] = ["Ana", "Bruno", "Carla"];
for (const [nome, indice] of nomes.entries()) {
console.log(indice + ": " + nome);
}
}
imprimirComIndice();

//a ordem das variáveis está invertida. O método entries() retorna primeiro o índice e depois o nome.

function juntarNomes(): string {
const nomes: string[] = ["Ana", "Bruno", "Carla"];
let resultado = "";
for (let i = 0; i < nomes.length; i++) {
resultado += nomes[i] + ", ";
}
return resultado;
}
console.log(juntarNomes());

//ele adiciona ", " também depois do último nome.