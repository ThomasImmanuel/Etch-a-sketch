const container = document.createElement("div");
container.classList.add("container");
container.setAttribute('style','width: 960px; height: 500px; display: grid;')

document.body.appendChild(container);

function makeGrid (num){
    for (let i = 0; i <= (num * num) -1; i++) {
        let div = document.createElement("div");
        div.setAttribute('style','background-color: green; margin: 1px;');
        container.appendChild(div);
    }
    container.setAttribute('style',`width: 960px; height: 500px; display: grid; grid-template-columns: repeat(${num},1fr);`)
    
}

makeGrid(40);



