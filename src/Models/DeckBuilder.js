
import fs from 'fs';

import {Card} from './Card.js';
import {Deck} from './Deck.js';

export class DeckBuilder{

    
    constructor(){}
    
    //Creates a deck from a JSON file (returns a Promise)
    buildFromJSON(filePath){ 
        return new Promise((resolve, reject) => {

            //Read in the JSON file
            fs.readFile(filePath, (err, data) => {
                //Parse the JSON data
                let deckRaw = JSON.parse(data);

                //Create the array of Cards
                let cards = [];
                for(let i = 0; i < deckRaw['cards'].length; i++){
                    cards.push(this._buildCard(deckRaw.cards[i]));
                }

                //Create the deck with the JSON data
                let deck = new Deck(
                    this._createUUID(),
                    deckRaw['deckName'],
                    deckRaw['description'],
                    deckRaw['author'],
                    cards
                );

                //Return the deck from the promise
                resolve(deck);
            })
        });
    }

    //Function to create UUID's for created decks
    _createUUID(){
        var dt = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = (dt + Math.random()*16)%16 | 0;
            dt = Math.floor(dt/16);
            return (c=='x' ? r :(r&0x3|0x8)).toString(16);
        });
        return uuid;
    }

    //Creates a card object using the raw object
    _buildCard(cardRaw){
        return (new Card( cardRaw.id, cardRaw.name, cardRaw.description ));
    }

    //TODO:

    //Creates a deck from a CSV file
    buildFromCSV(csvString){ return false; }

    //Logs any errors during data processing
    logError(errMsg){ return false; }
}