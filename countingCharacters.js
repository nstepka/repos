function countingCharacters(stringToCount){
    // The length property has been mentioned in
    // the Logging Letter Exercise in Lesson 4
    console.log (stringToCount + " has " +
              stringToCount.length + " characters.");
}
function countingCharacters2(stringToCount, characterToFind){

    // Let's count the number of times a character appears in a string
    // We will look at each character one-by-one with the help of a for loop
    var characterCount = 0;
    var characterPosition = 0;
    for (var characterPosition = 0;
           characterPosition < stringToCount.length;
           characterPosition++){
        if (stringToCount[characterPosition] == characterToFind){
            characterCount++;
        }
    }
    console.log("String to search in: " + stringToCount);
    console.log("Character to find: " + characterToFind);
    console.log("Number of times the character appears: " +
                  characterCount);
}

function countingCharacters3(str, search) {
        var count = 0;
        var numChars = search.length;
        var lastIndex = str.length - numChars;
        for (var index = 0; index <= lastIndex; index++) {
            var current = str.substring(index, index + numChars);
            if (current == search) {
              count++;
            }
        }
    return count;

}
/*
//code by nstepka
function countingCharacters(stringToCount) {
    // the length property has been mentioned in
    // the Logging Letter Exersice in Lesson 4
    console.log (stringToCount + " has " +
                stringToCount.length + " characters.");
}

function countingCharacters2(stringToCount, characterToFind){
    // Let's count the number of times a character appears in a string
    // We will look at each character one-by-one with the help of a for loop
    var characterCount = 0;
    for (var characterPosition = 0;
           characterPosition < stringToCount.length;
           characterPosition++){
        if (stringToCount[characterPosition] == characterToFind){
            characterCount++;
        }
    }
    console.log("String to search in: " + stringToCount);
    console.log("Character to find: " + characterToFind);
    console.log("Number of times the character appears: " +
                  characterCount);
}
/*
function countingCharacters2(stringToCount, characterToFind) {
    // lets count the number of times a  character appears in a string
    // We will look at each character one-by-one with the help of a for loop
    var characterCount = 0;
    for (var characterPosition = 0;
              characterPosition < stringToCount.length;
              characterPosition++) {

        if (stringToCount[characterPosition] == characterToFind) {
          characterCount++;
        }
      }

    console.log("string to search in: " + stringToCount);
    console.log("Character to find: " + characterToFind);
    console.log("Number of times the character appears: " + characterCount);
  }
*/
