import _, { create, get } from 'lodash';

let articles = [
  {
    "id": "1",
    "title": "First Article",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    "id": "2",
    "title": "Second Article",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  }
]

//Get Positions
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

function stickyCard(element) {
  alert("test")
}

for(let article of articles) {
  const articleElem = document.createElement('article')
  const randomPosition = (Math.random() * (100 - 10) + 10) + "vh"

  articleElem.setAttribute('id', 'article-' + article.id)
  articleElem.style = `top: ${randomPosition};left: ${randomPosition}`

  articleElem.innerHTML = `
    <h1>${article.title}</h1>
    <p>
      ${article.description}
    </p>
  `

  document.getElementById("articles").append(articleElem)

  article.x = getPos(document.getElementById("article-" + article.id))[0]
  article.y = getPos(document.getElementById("article-" + article.id))[1]

  document.getElementById("article-" + article.id).addEventListener("click", () => stickyCard())
}

function createLine() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = `<svg>
  <line x1=${articles[0].x} y1=${articles[0].y} x2=${articles[1].x} y2=${articles[1].y} style="stroke:rgb(255,0,0);stroke-width:2" />
  </svg>`

  return element;
}

document.body.appendChild(createLine());