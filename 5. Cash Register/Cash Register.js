const checkCashRegister = (price, cash, cid) => {
  let change = {status: '', change: []};
  let diff = cash - price;
  const changeArray = [];
  const cidAmount = {
    "PENNY": .01,
    "NICKEL": .05,
    "DIME": .10,
    "QUARTER": .25,
    "ONE": 1.00,
    "FIVE": 5.00,
    "TEN": 10.00,
    "TWENTY": 20.00,
    "ONE HUNDRED": 100.00};
  let cidTotal = 0;

  //Add all values of the cash-in-drawer to form a total sum
  for(let i = 0; i < cid.length; i++){
    cidTotal = cidTotal + cid[i][1];
  }
  cidTotal = cidTotal.toFixed(2);
  

  /*If the difference is equal to the total cash-in-drawer, 
    return CLOSED*/
  if (diff == cidTotal) {
    change.status = "CLOSED";
    change.change = cid;
    return change;
  } 

  /*Else if the difference is greater than the total money available, 
    return INSUFFICIENT_FUNDS funds*/
  else if (diff > cidTotal) {
    change.status = "INSUFFICIENT_FUNDS";
    change.change = changeArray;
    return change;
  } 

  //Else if the difference is smaller than the total money available, 
  else {
    //Reverse the array
    cid = cid.reverse();
    /*Loop through each subarray 
      to find out which currency unit we need to push inside array*/
    for (let i of cid) {
      let temp = [i[0], 0];
      while (diff >= cidAmount[i[0]] && i[1] > 0) {
        temp[1] = temp[1] + cidAmount[i[0]];
        i[1] = i[1] - cidAmount[i[0]];
        diff = diff - cidAmount[i[0]];
        diff = diff.toFixed(2);
      }
      if (temp[1] > 0) {
        changeArray.push(temp);
      }
    }
    
    /*If the difference is still greater than zero, 
      we dont have the proper coins/currency units to return the change*/
    if (diff > 0) {
      change.status = "INSUFFICIENT_FUNDS";
      change.change = [];
      return change;
    }
    /*If the difference is smaller than zero, 
      we are able to return the needed/required amount of change,
      with the proper cuurency units*/
    else {
      change.status = "OPEN";
      change.change = changeArray;
      return change;
    }
  }
}