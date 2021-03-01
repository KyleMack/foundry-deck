"use scrict";

/* Class for containing Card Data*/
export class Card{

    id = null;
    name = null;
    description = null;

    constructor(id = null, name = null, description = null){
        this.id = id;
        this.name = name;
        this.description = description;
    }

    getId(){ return this.id; }
    getName(){ return this.name; }
    getDescription(){ return this.description; }

    setId(id){ this.id = id; }
    setName(name){ this.name = name; }
    setDescription(description){ this.description = description; }

    enumerate(){ return `[${this.name}: ${this.description}]`; }

}