function hello(){
    console.log('Hello from', this)
}

const basePerson = {
    name: "name",
    age: 0,
    greet : hello,
    greetWindow: hello.bind(window),
    logInfo: function(job, phone){
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Phone is ${phone}`)
        console.groupEnd()
    }
}

const andrew = Object.create(basePerson, { name: { value:"Andrew"}, age: {value:24}})
const lena = {
    name: "Lena",
    age: 20
}

// const lenaInfoLog = basePerson.logInfo.bind(lena)
// lenaInfoLog("Developer", "8-800")
// basePerson.logInfo.call(lena, "Developer", "8-8000")
// basePerson.logInfo.apply(andrew, ["Developer", "8-8000"])

const array = [1, 2, 3, 4, 5]
Array.prototype.multBy = function(n){
    return this.map(i => i*n);
}
//array.multBy(4)

const maxim = Object.create(basePerson, {
    name: {value : "Maxim"},
    age : {value : 18}
})