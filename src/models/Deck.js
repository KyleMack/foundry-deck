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

    //Returns the total number of cards
    getTotalCards(){ return this.cards.length(); }
    //Returns true if the deck is empty, false if not
    isEmpty(){ return (this.cards.length() === 0); }

    //Adds a card to the deck (Card Object)
    addCard(card){ this.cards.push(card); }
    //Adds a card to the deck (name & description)
    addCard(name, description){ this.cards.push( new Card(name, description) ); }

    //Remove a card based on ID
    removeCardbyId(id){ this.cards.splice( this.cards.findIndex((card)=>{card.id == id}), 1 ); }
    //Remove a card based on name (Remove all matching cards if removeAll=true)
    removeCardbyName(name){ this.cards.splice( this.cards.findIndex((card)=>{card.name == name}), 1 ); }
    //Remove all cards with the same name
    removeAllByName(name){ this.cards = this.cards.filter((card)=>{card.name != name}); }

    //Removes one card from the deck and returns it
    draw(){ return this.cards.pop(); }

    //TODO:
    //Randomizes the deck
    shuffle(){ return false; }


}