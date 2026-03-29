// complete this js code
class Person {
	constructor(name,age){
		this.name=name;
		this.age=age;
	}
	greet(){
	   console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
	   console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
	}

}

class Employee extends Person {
	constructor(name,age,jobTitle){
		super(name,age);
		this.jobTitle=jobTitle;
	}
	jobGreet(){
		console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
	}
	
}

class Teacher extends Person {
	constructor(name,age){
		super(name,age);
	}
	teach(){
		return `${this.name} is teaching`
	}
}
// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
