// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
    let strLength = s.split(" ").map(s => s.length).sort((a, b) => a - b);
      return strLength[0]
    }