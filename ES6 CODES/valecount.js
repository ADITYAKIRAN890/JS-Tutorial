// console.log("Hello1");
// setTimeout(() => {

//     console.log("Hello2");

// }, 5000);



// console.log("Hello3");

// function greet(name, callback1,callback2){
//     callback1()
//     callback2()
// }
// function sayBye(){
//     console.log("Bye Bye")
// }
// function sayThanks(){
//     console.log("Thanks")
// }
// greet("Shyam", sayBye, sayThanks)

function checkLogin(callback){
    setTimeout(() => {

        console.log("User is login into the Application");
        callback();

    },3000);
}
function verifyCart(callback){
    setTimeout(() => {
        console.log("user verify cart")
        callback();
    }, 3000);
}
function proceedToPayment(callback){
    setTimeout(() => {
        console.log("Payment Done");
        callback();
    }, 3000);
}
function placeOrder(callback){
    setTimeout(() => {
        console.log("Order Placed")
        callback()
    }, 3000);
}
 
// Pyramid of doom
checkLogin(() => {
    verifyCart(() => {
        proceedToPayment(()=>{
            placeOrder(() => {
                console.log("All Task Done")
            })
        })
    })
})
