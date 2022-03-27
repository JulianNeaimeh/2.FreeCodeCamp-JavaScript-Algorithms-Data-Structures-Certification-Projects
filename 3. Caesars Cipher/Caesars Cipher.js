function rot13(str) {
  let tempStr = "";
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for(let i = 0; i < str.length; i++) {
    let newIndex = (alphabet.indexOf(str[i]) + 13) % 26;
    //If the letter is found in the alphabet, set its version in the temp string to that letter's index + 13
    if(alphabet.includes(str[i])){
      tempStr = tempStr + alphabet[newIndex];
    }
    //Else leave the letter as is (might be whhitespace or symbol)
    else {
      tempStr = tempStr + str[i];
    }
  }

  return tempStr;
}