const reverseStr = (str) => {
    const reverseStr = str.split("").reverse().join("");
    console.log(reverseStr);
};

const isPalindrome = (str) => {
    const lowerCaseStr = str.toLowerCase();
    const reverseStr = lowerCaseStr.split("").reverse().join("");
    const isPalindrome =
        lowerCaseStr === reverseStr ? "is a Palindrome" : "isn't a Palindrome";
    console.log(isPalindrome);
};

const countOccurrences = (str, letter) => {
    const re = new RegExp(letter, "g");
    const counter = str.match(re).length;
    console.log(counter);
};

const isAnagram = (str1, str2) => {
    const orderedStr1 = str1.split("").sort().join("");
    const orderedStr2 = str2.split("").sort().join("");

    const isAnagram =
        orderedStr1 === orderedStr2 ? "is an Anagram" : "isn't an Anagram";
    console.log(isAnagram);
};

const countVowelsAndConsonants = (str) => {
    let counter = {
        vowels: 0,
        consonants: 0,
    };

    const reVowels = new RegExp(/[aeiou]/, "gi");
    const reConsonants = new RegExp(/[bcdfghjlmnpqrstvwxyz]/, "gi");

    counter.vowels = str.match(reVowels).length;
    counter.consonants = str.match(reConsonants).length;

    console.log(JSON.stringify(counter));
};

const duplicatedNumbers = (arr) => {
    const duplicatedNumbers = arr.filter((n, index) => {
        console.log(`Number: ${n}`);
        console.log(`Index on N: ${arr.indexOf(n)}`);
        console.log(`Current Index ${index}`);
        // indexOf will only bring the index of the first value it finds
        return arr.indexOf(n) !== index;
    });
    console.log(`Filter result: ${duplicatedNumbers}`);
};

const isPrime = (n) => {
    for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
        console.log(`i: ${i}`);
        console.log(`s: ${s}`);
        if (n % i === 0) return false;
    }
    return n >= 2;
};

const sumOfAllNumbers = (arr) => {
    const result = arr.reduce((previousValue, currentValue) => {
        return previousValue + currentValue
    }, 0)

    console.log(result);
}

// reverseStr("Hello World!");
// isPalindrome("Ana");
// isPalindrome("Hello");
// countOccurrences("Hello World!", "l");
// isAnagram("cinema", "iceman");
// countVowelsAndConsonants("Mischief managed");
// duplicatedNumbers([1, 2, 3, 1, 5, 8, 5, 2]);
// console.log(isPrime(10));
// sumOfAllNumbers([1,2,3,4])

const p = {
    name: "Enzo",
    lastName: "Quesada"
}

const t = {...p}

t.name = "Dario"

console.log(p);
console.log(t);
