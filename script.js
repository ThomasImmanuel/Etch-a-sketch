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
        console.log('Number to high');
        return;
    }
    for (let i = 0; i <= (num * num) -1; i++) {
        let div = document.createElement("div");
        div.setAttribute('style','background-color: green; margin: .5px;');
        container.appendChild(div);
    }
    container.setAttribute('style',`width: 960px; height: 500px; display: grid; grid-template-columns: repeat(${num},1fr);`);
}





