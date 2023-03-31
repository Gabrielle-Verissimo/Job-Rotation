// 3) Dado um vetor que guarda o valor de faturamento diário de 
// uma distribuidora, faça um programa, na linguagem que desejar,
// que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário
// foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento
// mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e 
// feriados. Estes dias devem ser ignorados no cálculo da média;

const fs = require('fs')
fs.readFile('./dados.json', 'utf8' , (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  lowerValue(data);
  highestValue(data);
  nDaysBiggerThanAverage(data);
  
})

function average(data) {
  const validValues = valuesValidator(data);
  var average;
  var add = 0;
  validValues.forEach((value) => {
    add += value;
    average = add / validValues.length
  });

  return average;
}

function highestValue(data) {
  const validValues = valuesValidator(data);
  highest = validValues[0];
  for (let i = 0; i < validValues.length; i++) {
    if(highest < validValues[i+1]){      
      highest = validValues[i+1];
    }
  }

  return highest;
}

function lowerValue(data) {
  const validValues = valuesValidator(data)
  var lower;
  lower = validValues[0];
  for (let i = 0; i < validValues.length; i++) {
    if(lower > validValues[i+1]){      
      lower = validValues[i+1];
    }
  }

  return lower;
}

function nDaysBiggerThanAverage(data) {
  const validValues = valuesValidator(data);
  const varAverage = average(data);
  var nDays = 0;
  validValues.forEach((value) => {
    if(value > varAverage){
      nDays++;
    }
  });

  return nDays;
}

function valuesValidator(data){
  const faturamento = JSON.parse(data);
  var values = [];
  Object.keys(faturamento).forEach(key => {
    values.push(faturamento[key].valor);
  });
  const validValues = values.filter((value) => {
    if(value > 0){
      return value;
    }
  });

  return validValues;
}

