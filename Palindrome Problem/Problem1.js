//Check whether a string is palindrome or not.

let str="Masai School";
let N=11;
let rev="";
for(let i=0; i<=N-1; i++){
  rev =str[i]+rev;
}
if(str==rev){
  console.log("Palindrome")
}else{ 
  console.log(" Not a Palindrome")
}
