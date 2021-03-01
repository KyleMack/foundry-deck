"use strict";

console.log('Importing modules...');

//Import necessary classes
import {Deck} from '../Models/Deck.js';
import {DeckBuilder} from '../Models/DeckBuilder.js';

console.log('Creating classes...');

//Create a DeckBuilder instance
let db = new DeckBuilder();

console.log('Reading in JSON file...');

db.buildFromJSON('../Assets/Data/SampleDeck.json')
    .then((data) => {console.log(data.enumerate());});