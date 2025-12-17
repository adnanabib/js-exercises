// function blocking(){

//    alert ("you are late")
//    console.log("you are 2 seconds late")

// }

// blocking()



function blocking(){

   
   console.log("immedietly")
setTimeout(()=>{
    console.log("you are late 3 seconds")
},3000)
}

blocking()

console.log("i am coming before you")
