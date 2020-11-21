/**
* @param {string} string  
* @param {number} limit 
* @return {string}  
*/

const removeRepeated = (string, limit) => {
  let word = '';
  let count = 0;
  let letterPrevious = '';
  for (let i = 0; i < string.length; i++) {
    if (letterPrevious != string.charAt(i)
      || (letterPrevious == string.charAt(i) && count < limit)) {
      if (letterPrevious != string.charAt(i)) {
        count = 1;
      } else if (count < limit) {
        count++;
      }
      word += string.charAt(i);
      letterPrevious = string.charAt(i);
    }
  }
  return word;
}
export default removeRepeated;


/**
* @param {string} string  
* @param {number} times 
* @return {string}  
*/

const replaceChar = (string, times) => {
  let word = '';
  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) == '?') {
      for (let j = 0; j < times; j++) {
        if (i == 0) {
          word += lastLetter(string);
        } else {
          word += string.charAt(i - 1);
        }
      }
    } else {
      word += string.charAt(i);
      continue;
    }
  }
  return word;
}
const lastLetter = (string) => {
  let letter = '';
  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) == '?') {
      continue;
    } else {
      letter = string.charAt(i);
    }
  }
  return letter;
}

export default replaceChar;


/*
 Acredito que o objetivo desse desafio não era utilizar algo pronto então resolvi utilizando o for,
 porem deixei a outra opção para analise. 
*/

// opção 1

/**
* @param {string} string1 
* @param {string} string2
* @return {number}  
*/

const lettersSum = (string1, string2) => {

  if (typeof (string1) != "string" || typeof (string2) != "string" || string1.length == 0 || string2.length == 0) {
    return 'Parâmetros passados são incorretos!\nSão aceitos apenas string com ao menos 1 caractere.'
  }

  string1 = string1.toLowerCase();
  string2 = string2.toLowerCase();

  let minString1 = string1.charAt(0);
  let maxString1 = string1.charAt(0);
  let minString2 = string2.charAt(0);
  let maxString2 = string2.charAt(0);

  for (let i = 1; i < string1.length; i++) {
    if (string1.charAt(i) < minString1) {
      minString1 = string1.charAt(i);
    }
    if (string1.charAt(i) > maxString1) {
      maxString1 = string1.charAt(i);
    }
  }

  for (let i = 1; i < string2.length; i++) {
    if (string2.charAt(i) < minString2) {
      minString2 = string2.charAt(i);
    }
    if (string2.charAt(i) > maxString2) {
      maxString2 = string2.charAt(i);
    }
  }

  let menorLetraString1 = minString1.codePointAt() - 96;  
  let maiorLetraString1 = maxString1.codePointAt() - 96;  
  let menorLetraString2 = minString2.codePointAt() - 96;  
  let maiorLetraString2 = maxString2.codePointAt() - 96;
  
  let retorno = (maiorLetraString1 * menorLetraString2) + (maiorLetraString2 * menorLetraString1);

  return retorno;
}
export default lettersSum;


//opção 2:


/**
* @param {string} string1 
* @param {string} string2
* @return {number}  
*/

const lettersSum2 = (string1, string2) => {

  if (typeof (string1) != "string" || typeof (string2) != "string" || string1.length == 0 || string2.length == 0) {
    return 'Parâmetros passados são incorretos!\nSão aceitos apenas string com ao menos 1 caractere.'
  }

  string1 = string1.toLowerCase();
  string2 = string2.toLowerCase();

  let minString1 = string1.split("").sort()[0];
  let maxString1 = string1.split("").sort()[string1.length - 1];
  let minString2 = string2.split("").sort()[0];
  let maxString2 = string2.split("").sort()[string2.length - 1];

  let menorLetraString1 = minString1.codePointAt() - 96;
  let maiorLetraString1 = maxString1.codePointAt() - 96;
  let menorLetraString2 = minString2.codePointAt() - 96;
  let maiorLetraString2 = maxString2.codePointAt() - 96;
  
  let retorno = (maiorLetraString1 * menorLetraString2) + (maiorLetraString2 * menorLetraString1);

  return retorno;
}
export default lettersSum2;

