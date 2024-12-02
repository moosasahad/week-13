// (function (){
//     console.log('iif function')
// })()

// function main (callback){
//     console.log("main function");
//     callback()
    
// }
// function callbackfunction (){
//     console.log("callback functio");
    
// }
// main(callbackfunction)
// setTimeout(() => {
//     console.log("Task 1");
//     setTimeout(() => {
//         console.log("Task 2");
//         setTimeout(() => {
//             console.log("Task 3");
//         }, 1000);
//     }, 1000);
// }, 1000);

// function outer (){
//     let a = 'outervarible';

//     function inner(){
//         console.log(a);
        
//     }
//     return inner
// }
// const b = outer()
// b();

// function re(n){
//     if(n===1){
//         return 1
//     }
//     return n*re(n-1)
// }
// console.log(re(5));

// let poromis = new Promise((res,rej)=>{
//     res("resolved")
//     rej("not resolved")
// })
// let poromis1 = new Promise((res,rej)=>{
//     res("resolved1")
//     rej("not resolved1")
// })

// Promise.race([poromis,poromis1]).then((res)=>{
//     console.log(res);
    
// }).catch((Error)=>{
//     console.log(Error);
    
// })
//     poromis.then((result)=>{
//         console.log(result);
        
//     }).catch((error)=>{
//         console.log(error);
        
// })
    

// console.log(poromis);

