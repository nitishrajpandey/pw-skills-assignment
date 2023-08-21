
function countWordOccurrences(sentence) {
    const wordCount = new Map()

    const words = sentence.split(/\s+/);

    for (const word of words) {
        const cleanWord = word.replace(/[.,!?]/g, '');

        if (cleanWord) {
            if (wordCount.has(cleanWord)) {
                wordCount.set(cleanWord, wordCount.get(cleanWord) + 1);
            }
            else {
                wordCount.set(cleanWord, 1);
            }
        }
    }
    return wordCount;
}

const sentence = "please please submit your assigment on time . your assigment is important.";
const wordOccurrences = countWordOccurrences(sentence);
console.log(wordOccurrences);


