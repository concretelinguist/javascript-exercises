const container = document.querySelector('#container');

//add a <p> with red text that says "Hey I'm red!"
const addP = document.createElement('p');
addP.textContent ="Hey I'm red!";
addP.style.color = "red";
container.appendChild(addP);

//add h3 tag with blue text that says "I'm a blue h3!"
const addh3 = document.createElement('h3');
addh3.textContent = "I'm a blue h3!";
addh3.style.color = "blue";
container.appendChild(addh3);

// add div with a black border and a pink background color with:
    //another h1 that says "I'm in a div"
    //another p tag that says "Me too"
const blackDiv = document.createElement('div');
blackDiv.style.borderColor = "black";
blackDiv.style.borderStyle = "solid";
blackDiv.style.backgroundColor = "pink";
const addh1 = document.createElement('h1');
//add h1 inside div
blackDiv.appendChild(addh1);
addh1.textContent = "I'm in a div";
const innerP = document.createElement('p');
innerP.textContent = "Me too";
// add p element to div
blackDiv.appendChild(innerP);

//finally, add the black div to the container
container.appendChild(blackDiv);

const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    alert("Hello!");
});