//Check whether a string is palindrome or not.

let str="Masai School";
let N=11;
let rev="";
for(let i=0; i<=N-1; i++){
  rev =str[i]+rev;
}
if(str!=rev){
  console.log('Not Palindrome')
}else{ 
  console.log('Palindrome')
}
