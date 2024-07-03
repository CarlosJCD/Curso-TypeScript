class Movie implements Media {
    constructor(private name: string) {}

    print(): void {
        console.log(`Película ${this.name}`);
    }
}

class TvShow implements Media {
    constructor(private name: string) {}

    print(): void {
        console.log(`Serie ${this.name}`);
    }
}

interface Media {
    print(): void;
}

function printMedia<T extends Media>(media: T[]) {
    media.forEach((element) => {
        element.print();
    });
}

const movie = new Movie("Venom");
const tvShow = new TvShow("Breaking bad");


printMedia([movie, tvShow]); 


// keyOf

function findValue<T extends object, U extends keyof T>(object: T, key: U){
    return object[key]; 
}

console.log(findValue({name: "Rodrigo"}, "name")); 