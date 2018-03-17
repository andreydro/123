function getChange(itemCost, moneyPaid) {
  var result = ''
  var change = (moneyPaid - itemCost).toFixed(2)
  var cents 
  var coins = [50, 20, 10, 5, 1]
  console.log('first' + change) // 1.22
  if (typeof(itemCost) !== 'number' || typeof(moneyPaid) !== 'number') {
    throw new SyntaxError('input should be number')
  }
  if (!itemCost || !moneyPaid) {
    throw new SyntaxError('input should be number')
  }
  if (change < 0) {
    throw new SyntaxError('not enough money paid')
  }
 
  cents = (change - Math.floor(change)).toFixed(2)
  console.log(cents)
  result += (change - cents) + ' x roubles; '
  if (cents === 0) {
    return result
  }
  
  cents = Number((cents).toString().split('.')[1]) 
  
  console.log(cents)

  for (var coin in coins) {
    if (Math.floor(cents / coins[coin]) !== 0) {
      result += Math.floor(cents / coins[coin]) + ' x ' + coins[coin] + ' cents;'
      console.log(result)
      cents = cents % coins[coin]
      result += ' '
    }
  }
  // var string = "2.3" 
  // var fraction = string.split(".");
  // var integer = Number(fraction[1])
  // getChange(3, 3.22)
  // "0 x roubles; 1 x 20 cents; 2 x 1 cents; "
  
  return result
}