class Vehicle{
    brandName: string

    constructor(brandName: string){
        this.brandName = brandName
    }
}

const vehicle = new Vehicle("Toyota");

console.log(vehicle);
