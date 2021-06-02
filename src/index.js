import _, { get } from 'lodash';

function getPos(ele){
  var x=0;
  var y=0;
  while(true){
      x += ele.offsetLeft;
      y += ele.offsetTop;
      if(ele.offsetParent === null){
          break;
      }
      ele = ele.offsetParent;
  }
  return [x, y];
}

let card1 = getPos(document.getElementById("firstArticle"))
let card2 = getPos(document.getElementById("secondArticle"))

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = `<svg>
  <line x1=${card1[0]} y1=${card1[1]} x2=${card2[0]} y2=${card2[1]} style="stroke:rgb(255,0,0);stroke-width:2" />
  </svg>`

  return element;
}

document.body.appendChild(component());