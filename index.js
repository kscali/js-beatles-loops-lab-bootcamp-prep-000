function theBeatlesPlay(musicians, instruments) {
  var musicArray = [];
  for (var i = 0; i < musicians.length; i++) {
    musicArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return musicArray;
}

function johnLennonFacts(array) {
  let i = array.length;
  let facts = [];
  while (i >= 0) {
  facts.push(`${array[i]}!!!`);
    i--;
  }
  return facts;
}

function iLoveTheBeatles(n) {
  var love = [];
  do {
    love.push("I love the Beatles!");
    n++;
  } while(n < 15);
  return love;
}