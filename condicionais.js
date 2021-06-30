console.log(`Trabalhando com condicionais !!`);

const lista = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,

)

const idadeComprar = 18;

console.log("Destinos posíveis");
console.log(lista);

if(idadeComprar >= 18){
console.log("Comprador maior de idade")
lista.splice(1,1); // removendo item
}
else {

    console.log("Não é de maior de idade e não posso vender para você.");


}
console.log(lista);

console.log(idadeComprar > 18);
console.log(idadeComprar < 18);
console.log(idadeComprar <= 18);
console.log(idadeComprar >= 18);
console.log(idadeComprar == 18);