
const FAMILIES_ENDPOINT_URL = "/families";
const CASTLES_ENDPOINT_URL = "/castles"

const CASTLE_AUTH_TOKEN = "123";
const FAMILY_AUTH_TOKEN = "456";

let httpServer: { [key:string]: APIEndpoint } = {}

interface APIEndpoint {
    get(): string[]

    post(request:any): void
}

type request = {
    token: string,
    body: string
}

function authWithToken(authToken: string) {
    return function(target: any, key: string, descriptor: PropertyDescriptor) {
        const calledMethod = descriptor.value; 

        descriptor.value =  function(request: request){
            if(request.token !== authToken){
                console.log("Error 403: Forbidden Access");
            } else {
                const calledMethodWithItsContext = calledMethod.bind(this);
                return calledMethodWithItsContext(request);
            } 
        }
    }
}

function paramDecorator(target: any, key: string, index: number){
    console.log(target.constructor.name); 
    console.log(key); 
    console.log(index); 
}

class Families implements APIEndpoint {
    private houses: string[] = ["Lannister", "Targaryen"];

    get(): string[] {
        return this.houses;
    }

    @authWithToken(FAMILY_AUTH_TOKEN)
    post(@paramDecorator request: request): void {
        this.houses.push(request.body);
    }
}

class Castles implements APIEndpoint {
    private castles: string[] = ["Winterfell", "Casterly Rock"];

    get(): string[] {
        return this.castles;
    }

    @authWithToken(CASTLE_AUTH_TOKEN)
    post(@paramDecorator request: request): void {

        this.castles.push(request.body);
    }
}

function registerEndpoint(target:any) {
    const className: string = target.name;

    const enpointPath: string = `/${className.toLowerCase()}`

    httpServer[enpointPath] = new target();

}

registerEndpoint(Families)
registerEndpoint(Castles)


const castlePOSTRequest = { token: CASTLE_AUTH_TOKEN, body: "Castle Black"}
const familyPOSTRequest = { token: FAMILY_AUTH_TOKEN, body: "Stark"}

const castlesEndpoint = httpServer[CASTLES_ENDPOINT_URL];
const familiesEndpoint = httpServer[FAMILIES_ENDPOINT_URL];

castlesEndpoint.post(castlePOSTRequest);
familiesEndpoint.post(familyPOSTRequest);

console.log(`Castles: ${castlesEndpoint.get()}`);
console.log(`Families: ${familiesEndpoint.get()}`);
