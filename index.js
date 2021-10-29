function ReturnDate(){  
    constructor = ReturnDate;
}
ReturnDate.prototype= {
    hours:function(){
        let date = new Date()
        return date.getHours()
    },
}
let VerifyMixin = function(obj){
    obj.date = (hour, minute) =>{
        let greet1 ;
        if(hour > 6 && hour < 12){
            greet1 = "Good Morning"
        }
        else if(hour > 18 && hour < 22){
            greet1 = 'Good evening'
        }
        else if(hour > 22 || hour < 6){
            greet1 ='Good night'
        }
        return greet1
    }
} 
function Greeter() {
    constructor = Greeter
}
Greeter.prototype = Object.create(ReturnDate.prototype)
VerifyMixin(Greeter)
Greeter.prototype.greet = function(name, greetPerson){
    name[0].toLowerCase()
    return `${greetPerson} ${name}` 
}

let person = new Greeter()
hour = person.hours()
let greetPerson = Greeter.date(hour) 
console.log(person.greet("Andrea", greetPerson))