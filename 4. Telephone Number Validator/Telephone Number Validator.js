function telephoneCheck(str) {
  /*^(1\s?)?  -->  matches all that dont start with 1
    the \s(-) is optional and may proceed the 1
    the negation is optional as well, 
    where a number could start with it*/

  /*(\(\d{3}\)|\d{3})  -->  matches 3 consecutive numbers*/

  /*[\s\-]?  -->  matches the '-' symbol which would proceed the 3 numbers,
    but it is optional, as some entris wont have it.*/

  /*\d{3}  -->  matches 3 consecutive numbers*/

  /*[\s\-]?  -->  matches the '-' symbol which would proceed the 3 numbers,
    but it is optional, as some entris wont have it.*/

  /*\d{4}$  -->  matches 4 consecutive numbers
    MANDATORY to be found at the end of the number*/
  let strRegex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  return strRegex.test(str);
}