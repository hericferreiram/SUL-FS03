// leia dois numeros do terminal e indentifique se o primeiro
// é maior que o segundo

//import usando caminho rlativo
import leitor from '../../../../lib/leitor.mjs'

const num1 = await leitor("digite o primeiro>")
const num2 = await leitor("digite o segundo>")
if (num1 > num2) {
    console.log('o primeiro número é maior que o segundo')
} else {
    console.log('o segundo número é maior que o primeiro')
}