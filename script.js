// Obtém a referência para o elemento com a classe "grid-container"
const gridContainer = document.querySelector('.grid-container');

//Cria o array que contém todas as grid-child e que será usado para referenciá-las
var canvasRef = [];

//Cria as divs com a classe "grid-item" e adiciona à grid-container
for (let i = 0; i < 16 * 16; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridContainer.appendChild(gridItem);

    canvasRef.push(gridItem);
}

//Lê o input de cor e a seleciona
var selectedColor = "#000";
const colorSelector = document.querySelector('.colorSelector');
colorSelector.addEventListener('input', function() {
    selectedColor = colorSelector.value;
});

//Faz com que cada grid-child escute clicks nele
for (let i = 0; i < canvasRef.length; i++) {
    canvasRef[i].addEventListener('click', function() {
        canvasRef[i].style.backgroundColor = selectedColor;
    });
    canvasRef[i].addEventListener('dblclick', function() {
        canvasRef[i].style.backgroundColor = "#fff";
    });
}

const clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', function() {
    for (let i = 0; i < canvasRef.length; i++) {
        canvasRef[i].style.backgroundColor = "#fff";
    }
});