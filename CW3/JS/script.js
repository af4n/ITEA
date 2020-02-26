// () => {

// }

// function user() {
//     console.log(this)
// }

// (function(){ } ())
// (function){})()

// const user = function user() {}



// task 1 ________________________



/* const user = function () {
    console.log(this)
}

const user1 = {
    name: "Ivan",
    surname: "Ivanov",
    age: 28,
    speak: function(phone = 12, mobilePhone = 10, email = 'email.com') {
        console.group('Hello')
        console.log(`My second phone is ${mobilePhone}`)
        console.log(`My email is ${email}`)
        console.log(`My phone is ${phone}`)
        console.log(`My name is ${this.name}`)
        console.log(`My surname is ${this.surname}`)
        console.log(`My age is ${this.age}`)
    }
}

const user2 = {
    name: "Ivan",
    surname: "Ivanov",
    age: 28,
}

user1.speak.bind(window)('0800800800')
user1.speak.bind(user2)()
user1.speak.call(user2, '0800800800', '0700700700', 'email.com')
user1.speak.apply(user2, ['0800800800', '0700700700', 'email.com']) */



// task 2 __________________________________



// const arr = [1,3,5,7,9];

// Array.prototype.multi = function multiply(number) {
//     return array.map(element => element * number)
// };

// console.log(arr.multi(5))



// task 3 _____________________________________



// function User(fullName) {
//     this.fullName = fullName;

//     Object.defineProperties(this, {
//         firstName: {
//             get: function(){
//                 return this.fullName.split(' ')[0]
//             },
//             set: function(){
//                 return this.fullName = `${name} ${this.lastName}`
//             }
//         },
//         lastName: {
//             get: function(){
//                 return this.fullName.split(' ')[1]
//             },
//             set: function(name){
//                 return this.fullName = `${this.firstName} ${name}`
//             }
//         }
//     })
// }

// const result = new User('Vasya Petrov')

// result.firstName = 'Anna'
// result.lastName = 'Petrova'

// console.log(result)

// console.log(result.firstName)
// console.log(result.lastName)



// task 4 ______________________________



// let i = 0

// function func() {
//     i++
//     console.log(i)
// }

// func()
// func()
// func()
// func()



// task 5 ______________________________


// const button = document.querySelector('#button1')



// function random() {
//     const arr = []
//     return function () {
//         let rand = Math.floor(Math.random() * 100 + 1)
//         for (let i = 0; i < arr.lenght; i++) {
//             if (arr[i] === rand) {
//                 return false
//             }  
//         }
//         arr.push(rand)
//         console.log(arr)
//     }
// }

// const a = random()
// button.onclick = a

// console.log(a())