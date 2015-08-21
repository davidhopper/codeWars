/*  The goal of this exercise is to convert a string to a new string where each character 
    in the new string is '(' if that character appears only once in the original string, or ')' 
    if that character appears more than once in the original string. Ignore capitalization when 
    determining if a character is a duplicate. 
    
    ex: "din" => "((("

        "recede" => "()()()"

        "Success" => ")())())"
  */

function duplicateEncode(word){
  // convert str to array so we can run reduce on it
  var lowWord = word.toLowerCase();
  var wordArr = lowWord.split('');
  var result = '';

  // turn the string into an object where keys are unique letters and value how many times they appeared
  var letterObj = wordArr.reduce(function(total, curr) {
    if (!total[curr]) {
      total[curr] = 1;
    } else {
      total[curr]++;
    }
    return total;
  }, {});

  // loop through the string and replace each letter in the string with the corresponding paren in the object
  for (var i = 0; i < lowWord.length; i++) {
    if (letterObj[lowWord[i]] > 1) {
      result += ')';
    } else {
      result += '(';
    }
  }

  return result;
};
