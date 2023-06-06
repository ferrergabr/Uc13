//ler valor = 0;
//valor = prompt("Digite um número");
//if(valor % 2 == 0);
//alert("O número digitado é par");
//}
//else{
//    alert("O número digitado é ímpar");
//}

//let rs = valor % 2==0 ? "O número digitado é Par" : "O número digitado é ímpar";
//alert(rs);
//lista de produtos
const produtos = ["Mouse", "Teclado", "Sofá", "Monitor"];
console.log(produtos(1).topUpperCase());

//adicionar um produto
produtos.push("Cadeira Gamer");

for(let i = 0 ; i < produtos.length ; i++){
    console.log("Produto" +(i+1)+":"+produtos[i]);
}

produtos.pop();
for(let i of produtos){
    console.log(i);
}

let dados = prompt("Digite produtos separados por virgula");

//vamos usar um comando chamado split que permite quebrar uma
//string a partir de um caracter separador e trnasformá-la em 
//um array
const lista = dados.split(',');
for(let pr of lista){
    console.log(pr);
}
