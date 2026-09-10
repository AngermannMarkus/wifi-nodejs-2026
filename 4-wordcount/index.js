import { wordCount as wc } from "./lib/wordcount.js";
const sentence = 'WIFI Teilnehmer lernen, fast jeden Tag, viel nodeJS im nodeJS WIFI Kurs.';
//const sentence = 'Wo viel Licht ist, ist auch viel Schatten! Wo viel Licht ist, ist auch viel Schatten.'
const wordCount = wc(sentence);
console.log(sentence);

for (let i in wordCount) {
    console.log(wordCount[i] + ' x ' + i);
}