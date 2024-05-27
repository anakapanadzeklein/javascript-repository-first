let colors = ['yellow', 'pink', 'blue'];

function colorAlert() {
    alert(colors[1]);
}



let actors = [

    {
        firstName: "Emma",
        lastName: "Stone",
        famousMovie: "La La Land",
        age: 35
    },

    {
        firstName: "Brad",
        lastName: "Pitt",
        famousMovie: "Fight Club",
        age: 58
    },

    {
        firstName: "Meryl",
        lastName: "Streep",
        famousMovie: "The Devil Wears Prada",
        age: 72
    },

    {
        firstName: "Timothee",
        lastName: "Chalamet",
        famousMovie: "Call Me by Your Name",
        age: 27
    },

    {
        firstName: "Jennifer",
        lastName: "Aniston",
        famousMovie: "Friends (TV Series)",
        age: 53
    },

    {
        firstName: "Leonardo",
        lastName: "DiCaprio",
        famousMovie: "Titanic",
        age: 47
    },

    {
        firstName: "Emma",
        lastName: "Watson",
        famousMovie: "Harry Potter and the Philosopher's Stone",
        age: 32
    },

    {
        firstName: "Johnny",
        lastName: "Depp",
        famousMovie: "Charlie and the Chocolate Factory",
        age: 58
    },

    {
        firstName: "Gal",
        lastName: "Gadot",
        famousMovie: "Wonder Woman",
        age: 37
    },

    {
        firstName: "Neil",
        lastName: "Patrick Harris",
        famousMovie: "How I Met Your Mother (TV Series)",
        age: 49
    }
];



for (let index = 0; index < actors.length; index++) {
    let actor = actors[index];
    if (actor.age <=35) {
        console.log(actor.firstName + " " + actor.lastName);
    }

    else if (actor.age > 40) {
        console.log(actor.firstName + " " + actor.lastName + ", Age: " + actor.age);
    }
    
}