function palindrome(str) {
  //Regex to remove all symbols and _ 
  let strRegex = /[\W_]/g;

  //Regex matches the symbols and replaces them with empty strings
  //Lowercase all the string  to not face any issues
  str = str.toLowerCase().replace(strRegex, '');

  /*Loop through Only half of the string
    if the first index equal to the last, continue
    if the second index equal to before the last, continue
    so forth..*/
  for (let i = 0; i < str.length/2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      /*If a specific index doesnt equal its counter, 
        then not a palindrome*/
      return false;
    }
  }  
  return true;
}