class Family {
    constructor(
      public readonly name: string,
      public readonly castles: string[]
    ) {}
}
  
interface CastleCallback {
    (err?: Error, castles?: string[]): void;
}
  
const lanister = new Family("Lannister", ["winterfell", "Casterly Rock"]);
const targaryen = new Family("Targaryen", ["winterfell2", "Casterly Rock2"]);
  
export const families: Family[] = [lanister, targaryen];
  
function getCastlesByFamily(family: string, callback: CastleCallback): void {
    setTimeout(() => {
        try {
            let foundCastles = families.filter((x) => x.name == family);
        
            if (foundCastles.length > 0) {
                callback(undefined, foundCastles.map((x) => x.castles)[0]);
            } else {
                throw new Error("No se encontraron castillos");    
            }
        } catch (error: any) {
            callback(error, undefined); 
        }
    }, 2000);
}
  
function logCastleSearch(err?: Error, castles?: string[]):void {
    if (err){
        console.log(`Mensaje de error: ${err.message}`); 
    } else {
        console.log("Se encontraron los siguientes castillos:"); 
        console.log(castles); 
    }
}
  
console.log("Comenzando la busqueda..."); 
getCastlesByFamily('Lannister', logCastleSearch); 
console.log("Busqueda terminada..."); 
