// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre 
// será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), 
// escreva um programa na linguagem que desejar onde, informado um número, ele calcule 
// a sequência de Fibonacci e retorne uma mensagem avisando se o número informado ]
// pertence ou não a sequência.

#include <stdio.h>

int pertence(int);

int main(void) {
  
  int n = 0;
  int retorno = 0;

  printf("Digite um numero: ");
  scanf("%i", &n);

  retorno = pertence(n);
  if(retorno == 1) {
    printf("O numero informado pertence a sequencia\n");
  }
  else {
    printf("O numero informado nao pertence a sequencia\n");
  }

  return 0;
}

  
int pertence(int n){
  int a = 0, b = 1, c = 0;

  printf("1\n");
  for(int i = 1; i < 30; i++){
    c = a + b;
    a = b;
    b = c;
    printf("%i\n", c);
    if(n == c){
        return 1;
    }
  }

  return 0;
}

