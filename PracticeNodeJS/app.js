// const fs = require('fs');

// fs.writeFile("file.txt", "I am Learning NodeJS","utf-8",(err)=>{
//     if(err){
//         console.log("File Writing Error: ",err);
//     }else{
//         console.log("File Written Successfully.");
//     }
// })

// fs.readFile("file.txt","utf-8", (err,data)=>{
//     if(err){
//         console.log("File Reading Error: ", err);
//     }else{
//         console.log("File Content: ", data);
//     }
// })

// fs.appendFile("file.txt","\n Content appended Successfully.","utf-8",(err)=>{
//     if(err){
//         console.log("File Appending Error: ", err);
//     }else{
//         console.log("Content Appended Successfully.");
//     }
// })

// fs.appendFile("file.txt", new Date().getDate().toLocaleString(), (err)=>{
//     if(err){
//         console.log("File Appending Error: ", err);
//     }else{
//         console.log("Content Appended Successfully.");
//     }
// })

// DSA Practice

// Reverse String
// let str="Shivam Dhingra";
// let reversedStr= str.split("").reverse().join("");
// console.log("built in method: ",reversedStr)


// let reversedStr2="";
// for(let i=str.length-1;i>=0;i--){
//     reversedStr2+=str[i];
// }
// console.log("\nFor Loop: ",reversedStr2);

// let reversedStr3="";
// for(let char of str){
//     reversedStr3=char+reversedStr3;
// }
// console.log("\nFor of Loop: ",reversedStr3);

// let vari="";
// for(let char of reversedStr3){
//     vari= char+vari;
// }
// console.log("\nCorrect: ",vari);

// function reverseString(str) {
//     if(str==="") return "";
//     return reverseString(str.slice(1)) +str[0];
// }
// console.log("\nRecursive: ", reverseString(str));

// console.log("\n \n");

// class Node{
//     constructor(data){
//         this.data=data;
//         this.next=null;
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head=null;
//         this.tail=null;
//     }

//     append(data){
//         const newNode = new Node(data);
//         if(!this.head){
//             this.head = newNode;
//             this.tail = newNode;
//         }else{
//             this.tail = newNode;
//             this.tail.next = newNode;
//         }
//     }

//     display(){
//         let current = this.head;
//         while(current){
//             console.log(current.data);
//             current = current.next;
//         }
//     }
// }

// const list = new LinkedList();
// list.append(10);
// list.append(20);
// list.append(30);
// list.display();

function Node(data){
    this.data=data;
    this.next=null;
}
var head=new Node(10);
var mid= new Node(20);
head.next=mid;
var tail=new Node(30);
mid.next=tail;

// insert at Start
var insertAtStart=new Node(5);
insertAtStart.next=head;
head=insertAtStart;
console.log(head);

// insert at end
var insertAtEnd=new Node(40);
tail.next=insertAtEnd;
tail=insertAtEnd;
console.log(head);