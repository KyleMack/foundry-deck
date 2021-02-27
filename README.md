# foundry-deck
Card Deck for Foundry VTT

## Models/Classes used
Below are descriptions of the javascript Models/Classes used

### Card
The Card object represents one playing card. 
* Name
  * The name of the card
* Description
  * The description of the card

### Hand
The Hand object represents a 'hand' of playing cards.
* Cards
  * List of cards currently in the hand

### Deck
The Deck object represents a deck of playing cards.
* Name
  * The name of the deck
* Description
  * The description of the deck
* Author
  * The author of the deck
* Cards
 * The list of cards currently in the deck

The deck has the following methods:
* draw(_count_)
  * Take the top card from the deck
* shuffle()
  * Randomize the order of the cards in the deck
* addCard(_Card_)
  * Adds a card object to the bottom of the deck
* addCard(_name, description_)
  * Creates a new card object and adds it to the bottom of the deck




### Board