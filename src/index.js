import './index.html';
import './index.scss';

import image from './img/o3d3Xe5aw0U8IkLP.jpg';

import { mult, sum } from './modules/calc';


const imgWrap = document.querySelector('.img');
const img = new Image();
img.src = image;
imgWrap.append(img);

console.log(mult(2, 4));
console.log(sum(3, 4));