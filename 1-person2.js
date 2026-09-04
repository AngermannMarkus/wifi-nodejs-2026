class Person {
    constructor(firstname, lastname, phone) {
        this.firstname = firstname;
        this.lastname = lastname;  // Bedeutung this..
        this.phone = phone; 
    }
}

const markus = new Person('Markus', 'Angermann', 1234567);  //neues Objekt vom Typ/Klasse Person...
const julian = new Person('Julian', 'Schwang');

console.log(julian.lastname);
console.log(markus.firstname);
console.log(markus.phone);
console.log(julian.phone);
console.log(julian);

let xyvariable = 'Das ist ein Test! .';
console.log(xyvariable);
console.log('Das ist ein Test');