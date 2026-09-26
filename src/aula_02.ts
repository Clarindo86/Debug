type Cep = {

      "cep": string;
      "logradouro": string;
      "complemento": string;
      "unidade":string;
      "bairro": string;
      "localidade":string;
      "uf": string;
      "estado": string;
      "regiao": string;
      "ibge": string;
      "gia": string;
      "ddd": string;
      "siafi": string;
}
async function buscarCep(): Promise<Cep>{
    const response = await fetch("https://viacep.com.br/ws/01001000/json/")
    const dados = await response.json() as Cep;
    return dados;       
            
}

async function buscarCepExemplo(){
    const resultadoaguardado = await buscarCep();
    console.log(resultadoaguardado)
}
        

    
        
    
        
buscarCepExemplo()












