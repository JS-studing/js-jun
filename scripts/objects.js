const person = Object.create(
{
    calculateAge(){
       return new Date().getFullYear() - this.birthYear
    }
},
{
    name :{
        value : "BaseName",
        enumerable : true
    },
    birthYear: {
        value : 0,
        writable : true
    },
    job:{
        value : "Developer",
        enumerable: true,
        configurable: true
    },
    age:{
        get(){
            return this.calculateAge()
        },
        set(value){
            this.birthYear = new Date().getFullYear() - value 
        }
    }
})

//writable
console.log(person)
person.name = "Andrew"//false
person.birthYear = 2000//true

//enumerable
console.log(person)
for(let key in person){
    if(person.hasOwnProperty(key)){
        console.log(key, ":", person[key]) // name and job    
    }
}

//configurable
delete person.name // false
delete person.job // true
console.log(person)

//get-set
console.log(`${person.name} age is ${person.age}`)
person.age = 25
console.log(`${person.name} birthYear is ${person.birthYear}`)