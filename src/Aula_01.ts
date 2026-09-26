import path = require("path");

console.log
("meu nome é alex")

async function cafe(): Promise <string>{
    return  new Promise ((resolve) => {
        setTimeout(() => {
         resolve("café pronto")   
    
        }, 10000);
    }
)};

async function cafeexemplo(){
const resultado = cafe();
console.log(resultado);
const resultadoaguardado = await cafe();
console.log (resultadoaguardado);


}
cafeexemplo();
