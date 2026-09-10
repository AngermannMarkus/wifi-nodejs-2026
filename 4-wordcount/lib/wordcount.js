const ignore = /[\.,!]/g;  //RegEx
const seperator = ' ';

export function wordCount(sentence) {
    return sentence
    .replace(ignore, '')
    .toLowerCase()
    .split(seperator)
    .reduce((prev, current) => {
        prev[current] = prev[current] +1 || 1;
        return prev;
    }, {});
}