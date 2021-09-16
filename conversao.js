const celsius = 1
const kelvin = 2
const fahrenheit = 3

var tempOrigem = celsius
var tempDestino = fahrenheit
var temperatura = 36
var resultado = temperatura

if (tempOrigem == celsius){
    if (tempDestino == kelvin){
        resultado = temperatura + 273
    } else if (tempDestino == fahrenheit){
        resultado = temperatura*9/5+32
    }
}

console.log(resultado)