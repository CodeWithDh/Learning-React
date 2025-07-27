const root=document.getElementById("root");

let element={
    type:"a",
    props:{
        href:"https://google.com",
        target:"_blank"
    },
    children:"Click Google"
}

function render(element,root){
    const DomElement=document.createElement(element.type);
    DomElement.innerHTML=element.children;
    for (const prop in element.props) {
        if(prop==="children") continue;
        DomElement.setAttribute(prop,element.props[prop])
    }
    root.appendChild(DomElement);
}

render(element,root);

// class User{
//     constructor(username,email,age){
//         this.username=username;
//         this.email=email;
//         this.age=age;
//     }

//     getInfo(){
//         console.log(`Username: ${this.username}, Email: ${this.email}, Age: ${this.age}`);
//     }
// }

// class Teacher extends User{
//     constructor(username,email,age,subject){
//         super(username,email,age);
//         this.subject=subject;
//     }

//     getInfo(){
//         console.log(`Username: ${this.username}, Email: ${this.email}, Age: ${this.age}, Subject: ${this.subject}`);
//     }
// }

// let user1=new User("Shivam","sd@gmail.com","21");
// user1.getInfo();
// let teacher1=new Teacher("Hitesh Sir","chai@gmail.com","40","JavaScript");
// teacher1.getInfo();

// class React{
//     constructor(){
//         this.library="React";
//         this.server="http:localhost/3000";


//         document
//         .querySelector(".button")
//         .addEventListener("click",
//             this.handleClick.bind(this));

//     }

//     handleClick(){
//         console.log("Button Clicked!");
//         console.log("This context : ",this);
//         console.log(`Using ${this.library} from ${this.server}`);
//     }
// }

// const app=new React();

// call keyword is used to call a function exection context to a specific object.
// bind keyword is used to create a new function with a specific context.

// Math.PI=Object.getOwnPropertyDescriptor(Math,"PI");
// descriptor.writable=true;
// descriptor.enumerable=true;
// descriptor.configurable=true;
// descriptor.value=5;
// console.log("Descriptor of Math.PI: ",descriptor);
// console.log("Math.PI: ",Math.PI);

// const myObj={
//     name:"Shivam",
//     age:21,
//     greet:function(){
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }
// }

// console.log(Object.getOwnPropertyDescriptor(myObj,"name"));

// Object.defineProperty(myObj,"age",{
//     value:21,
//     writable:false,
//     enumerable:false,
//     configurable:false
// })
// -----------Object Descriptors and Properties-----------
// Object.defineProperties(myObj,{
//     name:{
//         writable:false,
//         enumerable:true,
//     },
//     age:{
//         writable:false,
//         enumerable:false,
//     }
// })

// for (const [key,value] of Object.entries(myObj)) {
//     if(typeof value !=="function"){
//         console.log(`${key}: ${value}`);
//     }else{
//         console.log(`${key} is a function`);
//     }
// }

