'use strict';

// const name = 'Mohamed Ibrahim';

// function function1() {
//     const currentYear = 2023;
//     const age = currentYear - 2002;

//     if (age > 18) {
//         console.log('You are eligble to vote');
//     } else {
//         console.log('You are not eligbile to vote');
//     }

//     function function2() {
//         const jobs = 'Developer';
//         console.log(`${name} is ${age} years old ${jobs}`);
//     }
//     function2();

//     function function3() {
//         const gender = 'Male';
//         console.log(`${name} is ${age} years old ${gender} and he is ${jobs}`);
//     }
//     function3();

// }

// function1();

// function function1() {
//     var name1 = 'mohamed';
//     let name2 = 'mohamed';
//     const name3 = 'mohamed';
//     console.log(name1, name2, name3);
// }
// // console.log(name1);

// {
//     var age1 = 20;
//     let age2 = 20;
//     const age3 = 20;`
//     console.log(age1, age2, age3);
// }
// console.log(age1);
// console.log(age2);

// const name = 'Mohamed Ibrahim';

// function myFunction1() {
//     const age = 21;
//     // console.log(`${name} is a ${age} years old ${gender} who is ${job}`);

//     function myFunction2() {
//         const job = 'Developer';

//         function myFunction3() {
//             const gender = 'Male';
//             console.log(`${name} is a ${age} years old ${gender} who is ${job}`);
//         }
//         myFunction3();
//     }
//     myFunction2();
// }
// myFunction1();

// {
//     const name1 = 'Mohamed';
//     let name2 = 'Mohamed';
//     var name3 = 'Mohamed';

//     // console.log(`${name1} is a ${age1} years old ${job1}`);
//     {
//         const age1 = 20;
//         let age2 = 22;
//         var age3 = 23;

//         // console.log(`${name1} is a ${age1} years old ${job1}`);
//         {
//             const job1 = 'Developer';
//             let job2 = 'Coder';
//             var job3 = 'Programmer';

//             console.log(`${name1} is a ${age1} years old ${job1}`);
//             console.log(`${name2} is a ${age2} years old ${job2}`);
//             console.log(`${name3} is a ${age3} years old ${job3}`);
//         }
//     }
// }

// // console.log(name1, age1, job1);
// // console.log(name2, age2, job2);
// console.log(name3, age3, job3);


/*
//! Scope Chain
function calcAge(birthYear) {
    const age = 2023 - birthYear;

    function printAge() {
        let output = `${firstName}, You are ${age}, born in ${birthYear}.`;
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            // Creating NEW variable with the same name as outer scope's variable
            const firstName = 'Ibrahim';

            // Reassigning outer scope's variable
            output = 'NEW OUTPUT!';
            const str = `Oh, and you're a Millenial, ${firstName}.`;
            console.log(str);

            function add(a, b) {
                return a + b;
            }

        }
        // console.log(str);
        console.log(millenial);
        // console.log(add(40, 50));
        console.log(output);
    }
    printAge();

    return age;
}

const firstName = 'Mohamed';
calcAge(1990);
// console.log(age);
// printAge();

//? Hoisting

//* Variables

console.log(me);
// console.log(job);
// console.log(birthYear);
var me = 'Ibrahim';
let job = 'Developer';
const birthYear = 2002;

//* Functions

addDecl(20, 25);
console.log(addDecl(20, 25));
// console.log(addExpr(20, 40));
console.log(addArrow);
// console.log(addArrow(30, 20));

function addDecl(a, b) {
    return a + b;
}

const addExpr = function (a, b) {
    return a + b;
};

var addArrow = (a, b) => a + b;

//? Example

console.log(undefined);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
    console.log('All Products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);


//? 'this' Keyword

// console.log(this);

const calcAge = function (birthYear) {
    console.log(2023 - birthYear);
    // console.log(this);
};

calcAge(2002);

const calcAgeArrow = birthYear => {
    console.log(2023 - birthYear);
    // console.log(this);
};

calcAgeArrow(1990);

const ibrahim = {
    year: 2002,
    calcAge: function () {
        console.log(this);
        console.log(2023 - this.year);
    }
};

ibrahim.calcAge();

const thameem = {
    year: 2004
};

thameem.calcAge = ibrahim.calcAge;
thameem.calcAge();

const f = ibrahim.calcAge;
// f();


//? Not to use arrow function as object 

// var firstName = 'Thameem';

const ibrahim = {
    firstName: 'Mohamed',
    year: 2002,
    calcAge: function () {
        // console.log(this);
        console.log(2023 - this.year);
        
        // solution 1
        // const self = this;  //* self or that
        // const isMillenial = function () {
        //     console.log(self);
        //     console.log(self.year >= 1990 && self.year <= 2005);
        // };

        // solution 2
        const isMillenial = () => {
            console.log(this);
            console.log(this.year >= 1990 && this.year <= 2005);
        };

        isMillenial();
    },

    greet: () => {
        console.log(this);
        console.log(`Hey ${this.firstName}`);
    },
};

ibrahim.greet();
ibrahim.calcAge();

//* arguments keyword
const addExpr = function (a, b) {
    console.log(arguments);
    return a + b;
};
addExpr(20, 30);
addExpr(20, 30, 5, 9, 5);

var addArrow = (a, b) => {
    console.log(arguments);
    return a + b;
};
addArrow(20, 50, 5, 8, 5);
       

//? Primitive types vs Reference types 

let age = 21;
let oldAge = age;
age = 22;

console.log(age);
console.log(oldAge);

const me = {
    name: 'Mohamed',
    age: 21,
};

const friend = me;
friend.age = 18;
console.log('Friend: ', friend);
console.log('Me: ', me);


//* Primitive
let lastName = 'Ibrahim';
let oldLastName = lastName;
lastName = 'Thameem';

console.log(lastName, oldLastName);

// * Reference
const chinna = {
    firstName: 'Thameem',
    lastName: 'Ansari',
    age: 20,
};

const marriedChinna = chinna;

marriedChinna.lastName = 'Mohamed';
console.log('Before marriage:', chinna);
console.log('After marriage:', marriedChinna);

// marriedChinna = {};

//* Copying objects

const chinna1 = {
    firstName: 'Thameem',
    lastName: 'Ansari',
    age: 20,
    friends: ['Ibrahim', 'Majith', 'Immam']
};

const chinnaCopy = Object.assign({}, chinna1);
chinnaCopy.lastName = 'Mohamed';

chinnaCopy.friends.push('harris');
chinnaCopy.friends.push('aashik');

console.log('Before marriage:', chinna1);
console.log('After marriage:', chinnaCopy);

*/