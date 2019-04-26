function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return array;
}

function johnLennonFacts(facts) {
  var newarray = [];
  var i = 0;
  while (i <  facts.length) {
  newarray.push(facts[i] + "!!!" ); i++;
}
return newarray;
}
function iLoveTheBeatles(number) {
  var emptyArray = [];
  do {
  var i = 15 - number ;
  emptyArray.push("I love the Beatles!");
  i++;
} while (number < 15);
return emptyArray
}
