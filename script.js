// https://www.codewars.com/kata/simple-pig-latin
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
//5 kuy
function pigIt(str){
  var arr = str.split(' ');
  var result = [];
  for(var a = 0 ; a < arr.length; a++){
    if(arr[a] !== '!' && 
       arr[a] !== '?' ){
       result.push(arr[a].substring(1,arr[a].length)+arr[a].substring(0,1)+'ay');
    }else{
      result.push(arr[a]);
    }
  }
  return result.join(' ');
}
