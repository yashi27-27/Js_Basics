//conditional statements:-
//checks whether the number is even or odd

/*if(condition){

} else{

} 
*/
const a = 0
if(typeof a ==='number'){
   if(a==0){
       console.log("neither even nor odd")
   }
    if(a%2===0){
        console.log("no. is even")
    }
    else{
        console.log("Nmber is odd")
    }
} else{
    console.error("not a number")
}
