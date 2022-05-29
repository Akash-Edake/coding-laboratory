//  Find the Longest Word in a String

function findLongestWordLength(str) {
    let wordLength = str.split(" ")
    let maxlength = 0

    for (let i = 0; i < wordLength.length; i++) {
        if (wordLength[i].length > maxlength) {
            maxlength = wordLength[i].length
        }
    }
    return maxlength;
}

let a = findLongestWordLength("The quick brown fox jumped over the lazy dog");
console.log(a)