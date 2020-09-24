/*var nome = "Luiz Moraes";
var n1 = 5;
var n2 = 8;
var frase = "Sem fé é possivel agradar a Deus";

console.log(nome);
console.log(frase.replace("Sem","Com"));

alert("Bem vindo!");
alert(frase.replace("Sem","Com"));


var lista = ["maça", "pêra", "laranja"];

console.log(lista);
console.log(lista[1]);
//alert(lista[1]);

// Incluir item na array
lista.push("uva");
console.log(lista);


// Tira item na array
lista.pop();
console.log(lista);


// Tamanho da array
console.log(lista.length);


// reverse(): Coloca em ordem reversa a array
console.log(lista.reverse());


//toString(): array para string
console.log(lista);
console.log(lista.toString());


//toString(): Primeiro elemento array para string
console.log(lista[0]);
console.log(lista.toString()[0]);


//join(): Coloca um elemento dentro da array para string
console.log(lista.join(" - "));

//Diconário Json
var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta);
console.log(fruta.nome);
console.log(fruta.cor);

//Lista do diconário Json
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
console.log(frutas[0].nome);
console.log(frutas[0].cor);
console.log(frutas[1].nome);
console.log(frutas[1].cor);

//Condicionais, laços de repetição e Date

//var idade = 18;
var idade = prompt("Qual sua idade?");
if (idade >= 18){
    alert("Maior de idade!");
}else{
    alert("Menor de idade!");
};

var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count++;
};

var count;
for(count=0; count <= 5; count++) {
    console.log(count);
};

var  data = new Date();
console.log(data);
console.log(data.getDay());
console.log(data.getMonth()+1);
console.log(data.getFullYear()+1);
console.log(data.getMinutes());
console.log(data.getHours());

function soma(n1, n2){
    return n1 + n2;
}

function setReplace(frase, nome, nome_novo){
    return frase.replace(nome, nome_novo);
}
alert(soma(5, 10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));

var validar  = 0 ;

function validaIdade(idade) {
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade?");
validaIdade(idade)
console.log(validar);



function clicou() {
    alert("Ok o click funcionou!");
}
*/

function clicou() {
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
}

function redirecionar(){
//    window.open("https://lcaminformatica.com.br");
    window.location.href = "https://lcaminformatica.com.br";
}

function trocar(elemento){
//    document.getElementById("mousemove").innerHTML = "<b>Obrigado por passar o mouse</b>";
//    alert("trocar texto");
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
//    document.getElementById("mousemove").innerHTML = "<b>Mouse voltou</b>";
//    alert("trocar texto");
    elemento.innerHTML = "Mouse voltou";
}

function load() {
    alert("Pagina carregada");
}
function funcaoChange(elemento){
    console.log(elemento.value)
}
