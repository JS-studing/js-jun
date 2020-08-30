function createCalcFunction(n){
    return function(){
        console.log(1000*n)
    }
}

function createIncrementor(n){
    return function(inc){
        return n + inc;
    }
}

function urlGenerator(domain){
    return function(url){
        return `https://${url}.${domain}`
    }
}

function logPerson(){
    console.group()
    console.log(`name: ${this.name}`)
    console.log(`age: ${this.age}`)
    console.groupEnd()
}

function bind(context, fn){
    return function(...args){
        fn.apply(context, args)
    }
}

const maxim = {name : "Maxim", age : 42 }
const lena = {name : "Lena", age : 21 }

const calc42 = createCalcFunction(42)
const calc21 = createCalcFunction(21)

const inc42 = createIncrementor(42)
const inc21Add3 = createIncrementor(21)(3)

const comUrl = urlGenerator("com")
const ruUrl = urlGenerator("ru")
const yandexUrl = ruUrl("yandex")