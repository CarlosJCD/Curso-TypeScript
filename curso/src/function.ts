const sumar2 = (x: number, y:number): number => {
    return x + y
}

function saludar(): void {
    console.log("Hola Mundo de TypeScript");
}

saludar();

const throwError: (message: string) => never = (message: string) => {
     throw new Error(message);
}