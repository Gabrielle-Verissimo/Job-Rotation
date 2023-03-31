// 5) Escreva um programa que inverta os caracteres 
// de um string.

// IMPORTANTE:
// a) Essa string pode ser informada através de 
// qualquer entrada de sua preferência ou pode ser 
// previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;

var str = "Gabrielle da Silva Veríssimo";

function reverse(str) {
    let strReverse = "";

    for(let i = str.length - 1; i >= 0; i--) {
        strReverse += str[i];
    }
    return strReverse;
}

var strReverse = reverse(str);

console.log(strReverse);