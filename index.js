function theBeatlesPlay(musicians, instruments) {
  var musicArray = [];
  for (var i = 0; i < musicians.length; i++) {
    musicArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return musicArray;
}

function johnLennonFacts(array) {
  let i = array.length;
  while (i >= 0) {
  `${array[i]}!!!`;
    i--;
  }
  return array;
}

function iLoveTheBeatles(n) {
  var love = [];
  do {
    love.push("I love the Beatles!");
    n++;
  } while(n < 15);
  return love;
}