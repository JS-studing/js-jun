const person = new Object({
	name: "Andrew",
	age: 25,
	greet: function(){
		console.log(`Hello! ${this.name}`)
	}
})

const lena = Object.create(person, { 
    name : {value : "Lena", writable : true },
    age : {value : 20, writable : true} 
})

Object.prototype.sayHello = function() {
	console.log(`Hello from ${this.name} prototype!`)
}

const sStr = "I'm string!"
const clStr = new String("I'm string!")