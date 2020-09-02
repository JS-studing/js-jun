// const animal = {
//     name :  "Animal",
//     age : 6,
//     hasTail : true
// }

// +++++++++++++++++++++++++++++++
class Animal {
    static type = "ANIMAL"

    constructor(options){
        this.name = options.name
        this.age = options.age
        this.hasTail = options.hasTail
    }

    voice(){
        console.log("GAF")
    }
}

class Cat extends Animal{

    constructor(options){
        super(options)
        this.color = options.color
    }

    voice(){
        super.voice()
        console.log("MYAU")
    }

    get ageInfo(){
        return this.age * 7
    }
    set ageInfo(value){
        this.age = value / 7
    }
}

const animal = new Animal({
    name: "Animal",
    age : 6,
    hasTail : true
})

const cat = new Cat({
    name: "Cat",
    age : 2,
    hasTail : true,
    color : "black"
})
// ------------------------------


class Component{
    constructor(selector){
        this.$el = document.querySelector(selector)
    }

    hide(){
        this.$el.style.display = 'none'
    }

    show(){
        this.$el.style.display = 'block'
    }
}

class Box extends Component{
    constructor(options){
        super(options.selector)
        this.$el.style.width = this.$el.style.height = (options.size + 'px')
        this.$el.style.background = options.color
    }
}

const createHtmlElement = function(id){
    var el = document.createElement("div")
    el.setAttribute("id", id)

    document.getElementById("htmlBody").appendChild(el)
}

createHtmlElement("box1")
createHtmlElement("box2")
createHtmlElement("circle1")

const box1 = new Box({
    selector : "#box1",
    size : 100,
    color : "red"
})
const box2 = new Box({
    selector : "#box2",
    size : 120,
    color : "blue"
})
box1.hide()

class Circle extends Box{
    constructor(options){
        super(options)
        this.$el.style.borderRadius = '50%'
    }
}

const circle = new Circle({
    selector : "#circle1",
    size : 150,
    color : "green"
})