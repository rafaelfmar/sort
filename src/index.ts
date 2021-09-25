import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

const numbersCollection = new NumbersCollection([10, 3, -5, 0, 7]);
const numbersSorter = new Sorter(numbersCollection);

numbersSorter.sort();

console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('XzyUiaHj');
const charactersSorter = new Sorter(charactersCollection);

charactersSorter.sort();

console.log(charactersCollection.data);
