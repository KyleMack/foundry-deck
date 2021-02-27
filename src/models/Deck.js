"use strict";

class Deck{

    id = null;
    name = null;
    description = null;
    author = null;
    cards = null;

    constructor(id = "", name = "", description = "", author = "", cards = []){
        this.id = id;
        this.name = name;
        this.description = description;
        this.author = author;
        this.cards = cards;
    }

    getId(){ return this.id; }
    getName(){ return this.name; }
    getDescription(){ return this.description; }
    getAuthor(){ return this.author; }
    getCards(){ return this.cards; }

    setId(id){ this.id = id; }
    setName(name){ this.name = name; }
    setDescription(description){ this.description = description; }
    setAuthor(author){ this.author = author; }
    setCards(cards){ this.cards = cards; }

    getTotalCards(){ return this.cards.length(); }
    
    //TODO: complete
    //Gets a random card
    getRandomCard(){ return false; }

    //Adds a card to the deck (Card Object)
    addCard(card){ return false; }
    //Adds a card to the deck (name & description)
    addCard(name, description){ return false; }

    //Remove a card based on ID
    removeCard(id){ return false; }
    //Remove a card based on name (Remove all matching cards if removeAll=true)
    removeCard(name, removeAll = false){ return false; }

}