// Condicionale

const number1 = 1
const number2 = 7

const disponible = 7000
const retirar = 200 //20000

if( disponible >  retirar) {
    console.log('Si puedes retirar')
}else{
    console.log('Lo sentimos, no puedes retirar')
}

/* 
"Operadores"
* > - mayor que
* < - menor que
* >= - mayor o igual que
* <= - menor o igual que
* === - igual que
* !== - diferente que
*/

// Comparación y Operador Estricto
const num1 = 20
const num2 = "20"

if(num1 == num2) {
    console.log('Si, son iguales!')
}else{
    console.log('Son Diferentes')
}

if(num1 == Number(num2)){
    console.log('Si, Son Iguales!')
}else{
    console.log('Son Diferentes')
}

if(num1 === num2){
    console.log('Si, Son Iguales!')
}else{
    console.log('Son Diferentes')
}

const authenticated = true

//if(authenticated)
if(authenticated === true){
    console.log('Usted esta autenticado')
}else{
    console.log('Usten no esta autenticado')
}

const saldo = 600
const pagar = 500
const tarjeta = true

if(saldo > pagar){
    console.log('Si puedes pagar')
}else if(tarjeta) {
    console.log('Tarjeta autorizada')
}else{
    console.log('No tienes saldo suficiente')
}

if(saldo > pagar || tarjeta){
    console.log('Si puedes pagar')
}else{
    console.log('No tienes saldo suficiente')
}

if(saldo > pagar && tarjeta){
    console.log('Si puedes pagar')
}else{
    console.log('No tienes saldo suficiente')
}

// Condicionales - Ternarios
authenticated ? console.log('Usuario autenticado!!!!!!!') : console.log('No autenticado, ir hacia login')

// Doble - Ternario
saldo > pagar ? console.log('Puedes pagar!!!!') : 
    tarjeta ? console.log('Puedes pagar con tarjet!!!!') :
        console.log('No puedes pagar!!')  






