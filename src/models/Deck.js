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
    //Fills the deck with X copies of the passed card
    fill(card, totalToAdd){ for(let i = 0; i < totalToAdd; i++){this.cards.push(card);} }

    //Remove a card based on ID
    removeCardbyId(id){ this.cards.splice( this.cards.findIndex((card)=>{card.id == id}), 1 ); }
    //Remove a card based on name (Remove all matching cards if removeAll=true)
    removeCardbyName(name){ this.cards.splice( this.cards.findIndex((card)=>{card.name == name}), 1 ); }
    //Remove all cards with the same name
    removeAllByName(name){ this.cards = this.cards.filter((card)=>{card.name != name}); }

    //Removes one card from the deck and returns it
    draw(){ return this.cards.pop(); }
    
    //Calls the _shuffle() method a random amount of times to shuffle
    shuffle(){
        let shuffleAmount = Math.floor(Math.random() * 100) + 1;
        for(let i = 0; i < shuffleAmount; i++){
            this._shuffle();
        }
    }

    //Randomizes the deck
    //See the below link for shuffling source:
    //https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    _shuffle(){ 
        let currIndex = this.cards.length(), tempValue, randIndex;

        //While there are still elements to shuffle...
        while(0 !== currIndex){
            //...pick a remaining element...
            randIndex = Math.floor(Math.random() * currentIndex);
            currIndex -= 1;

            //...and swap it with the current element
            tempValue = this.cards[currIndex];
            this.cards[currIndex] = this.cards[randIndex];
            this.cards[randIndex] = tempValue;
        }

    }

    enumerate(){ let out = ""; forEach((card)=>{out+=card.enumerate();}) }

}