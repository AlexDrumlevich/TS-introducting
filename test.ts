import { Rectangle } from "./Rectangle";
import { Shape } from "./ShapeInterface";
import { ShapesContainer } from "./ShapesContainer";
import { Square } from "./Square";

const shape1: Shape = new Rectangle(10, 2)
const shape2: Shape = new Square(10)
const shapes: Shape = new ShapesContainer([shape1, shape2])
console.log(`perimeter: ${shapes.getPerimeter()}, square: ${shapes.getSquare()}`)