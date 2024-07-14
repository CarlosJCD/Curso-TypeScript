import { getCastlesByFamily } from "./promises";
  
async function logCastlesSearch(family: string) {
    try {
      console.log("Comenzando la busqueda...");
      let foundCastles = await getCastlesByFamily(family);
      console.log(`Resultados: ${foundCastles.join(", ")}`);
      console.log("Busqueda terminada...");
    } catch (error) {
      console.log(`Error: ${error}`);
    }
}
  
logCastlesSearch('Stark'); 
  
logCastlesSearch('Lannister');