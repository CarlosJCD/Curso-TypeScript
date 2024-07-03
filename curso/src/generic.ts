class ArrayOfNumbers {
    constructor(private collection: number[]) {}
  
    get(index: number): number {
        return this.collection[index];
    }
}

class ArrayOfStrings {
    constructor(private collection: string[]) {}
  
    get(index: number): string {
        return this.collection[index];
    }
}

class ArrayOfAny<T>{
    constructor(private collection: T[]){}

    get(index: number): T {
        return this.collection[index]; 
    }

    add(value: T): void {
        this.collection.push(value); 
    }
}

const collection = new ArrayOfAny<number>([1,2,3,4,5]);

const collection2 = new ArrayOfAny(['a', 'b', 'c']);

// Funciones genericas 

function printString(arr: string[]): void {
    for (let currentString of arr){
        console.log(currentString); 
    }
}
function printNumber0(arr: number[]): void {
    for (let currentNumber of arr){
        console.log(currentNumber); 
    }
}

function printArr<T>(arr: T[]): void {
    for (let currentElement of arr){
        console.log(currentElement); 
    }
}

printArr<string>(["a", "b", "c"]); 
printArr<number>([1,2,3,4]); 

// Built-in

class GenericVehicle {
    branch: string = "";
    model: string = "";
}
  
function createVehicle(): GenericVehicle {
    const vehicle: Partial<GenericVehicle> = {};
    vehicle.branch = "Ford";
  
    return vehicle as GenericVehicle;
}
  
let cars: Readonly<string[]> = ["ford", "mazda"];
  
  
