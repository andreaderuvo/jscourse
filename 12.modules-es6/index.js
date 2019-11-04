import Rectangle from './geometry.js';
import { Triangle } from './geometry.js';

console.log(new Rectangle(3, 4).area());
console.log(new Triangle(4, 5).area());


let t = new Triangle(4, 5);
console.log(t.base);