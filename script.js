const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);
document.body.setAttribute('style','display: flex; align-items: center; flex-direction: column;')

const input = document.querySelector('#input');

function makeNewGrid() {
    let child = container.lastElementChild;
    while (child) {
        container.removeChild(child);
        child = container.lastElementChild;
    }
    makeGrid(parseInt(input.value));
}


function makeGrid (num){
    if (num > 100) {
        alert('Number must be under 100')
        return;
    }
    for (let i = 1; i <= (num * num); i++) {
        let div = document.createElement("div");
        div.setAttribute('style',`background-color: grey; `);
        container.appendChild(div);
        div.onmouseover = () => {
            div.setAttribute('style','background-color: black;')
        }
    }
    container.setAttribute('style',`width: 700px; height: 500px; display: grid; grid-template-columns: repeat(${num},1fr);`);
    
}