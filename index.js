let mainElement = document.getElementById('main');

mainElement.parentNode.removeChild(mainElement);


let newHeader = document.createElement('h1');

newHeader.id = 'victory';

newHeader.textContent = ('is the champion');

document.body.appendChild(newHeader);



