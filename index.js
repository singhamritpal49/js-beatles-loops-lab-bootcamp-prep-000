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
  i++;
  emptyArray.push("I love the Beatles!")
} while (number < 15);
}
