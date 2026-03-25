//transactions

// csv form: name, time, city


// find all invalid transactions

// invalid if time between cities is less than 60 min apart



//approach: function to read in names as key, then pairs of time + city

// if any time is within 60 of each entry, check if city is same, if not then invalid

class exchange {
    constructor(name, time, city){
        this.name = name;
        this.time = time;
        this.city = city;
    }
}

function validateTransactions(transactions){
    for (let i = 0; i < transactions.length; i++){
        
}

