const promiseOne=new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("Doing Asynchronous Task")
        resolve({username:"Aditya",id:018})
    }, 2000);
})//.then(function(){
    //console.log("Promise Executed")
//})

promiseOne.then(function(u1){
    console.log(u1);
    return u1.username
}).then((username) =>{
    console.log(username)
}) 
// promise never returns value it returns objects only.

