// interface Bird {
//     fly(): void;
// }

// interface Fish {
//     swim(): void;
// }

class Fish {
    swim(): void {
        console.log("Nadando...");
    }
}
  
class Bird {
    fly(): void {
        console.log("Volando...");
    }
}
  

type UnknownPet =  Fish | Bird;

function printPet(pet: UnknownPet) {
    /*  if (pet as Fish) {
      (pet as Fish).swim();
    } */
  
    if (pet instanceof Fish) {
      pet.swim();
    }
  }
  
  printPet(new Fish());