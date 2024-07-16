interface Square {
    type: 'square'
    size: number; 
}

interface Rectangle {
    type: 'rectangle'
    height: number; 
}

interface Circle {
    type: 'circle'
    radius: number; 
}

type Shape = Square | Rectangle | Circle; 

const shapeMeasurements = {
    "circle" : (shape: Shape) => (shape as Circle).radius,
    "rectangle" : (shape: Shape) => (shape as Rectangle).height,
    "square" : (shape: Shape) => (shape as Square).size,
}

function print(shape: Shape){
    console.log(shapeMeasurements[shape.type](shape));
    
}