//leia dois números do console, calcule a média destes números
// e apresente a reposta

import leitor from '../../../../lib/leitor.mjs'

const num1 = await leitor("digite a primeira nota>")
const num2 = await leitor("digite a segunda nota>")
const resultado = ((parseInt(num1)) + (parseInt(num2)))/2
console.log(resultado)