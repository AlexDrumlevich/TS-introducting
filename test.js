"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rectangle_1 = require("./Rectangle");
const ShapesContainer_1 = require("./ShapesContainer");
const Square_1 = require("./Square");
const shape1 = new Rectangle_1.Rectangle(10, 2);
const shape2 = new Square_1.Square(10);
const shapes = new ShapesContainer_1.ShapesContainer([shape1, shape2]);
console.log(`perimeter: ${shapes.getPerimeter()}, square: ${shapes.getSquare()}`);
//# sourceMappingURL=test.js.map