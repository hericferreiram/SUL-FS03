//crie um programa que leia dois numeros
// faça subtração e mostre o resultado

import leitor from './../../../../lib/leitor.mjs'

const num1 = await leitor ('digite o numero>')
const num2 = await leitor ('digite o numero>')
const num3 = num1 - num2
console.log(num3)