import { families } from "./callbacks";


export function getCastlesByFamily(family: string): Promise<string[]> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        let foundCastles = families.filter((x) => x.name == family);

        if (foundCastles.length > 0) {
            resolve(foundCastles.map((x) => x.castles)[0]);
        } else {
            reject("No se encontraron Castillos");
        }
        }, 2000);
    });
}

console.log("Comenzando la busqueda...");
getCastlesByFamily("Lannister")
.then((castles) => {
    console.log(`Castillos encontrados: ${castles.join(", ")}`);
    return castles.length;
}).then(numberCastles => console.log(`No. Encontrados: ${numberCastles}`))
.catch((reason) => console.log(`Error: ${reason}`));

console.log("Busqueda terminada...");