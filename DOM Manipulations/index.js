// const body = document.body;

// //между двете няма някаква много голяма разлика
// const nodeList = body.childNodes; 
// const elementCollection = body.children;

// console.log(nodeList); 
// console.loge(elementCollection);

// for (let item of body.childNodes) {
//     console.log(item);
// }

/*Не можем да правим нещо пододбно:
nodeList.filter(item => item.nodeType)...
*/

//1. достъпване на елемент по id
// const element = document.getElementById('main-content');
// element.style.backgroundColor = 'red';
// console.log(element);

//2. Достъпване по клас 
/*const texts = document.getElementsByClassName('text');

for (let text of texts) {
    text.style.color = 'blue';
}
*/

//3. Достъпване на елементи by tagName
// const pList = document.getElementsByTagName('*'); //така достъпваме абсолютно всичко

//Това досега са по-старите, в днешно време най-много се използва querySelector and querySelectorAll, тъй като те са по-кратки и по-силни. 

// const liList = document.querySelectorAll("ul > li");

// const allLiList = document.querySelectorAll('li');

// for (let li of allLiList) {
//     console.log(li);
// }

// const nav = document.querySelectorAll('#navigation');

// //querySelector - когато искаме само за 1 елемент
// const nav1 = document.querySelector('#navigation');

// const navLiItems = nav.querySelectorAll('li');
// console.log(navLiItems);

// const nav = document.querySelector('#navigation');
// console.log(nav);

// console.log(nav.closest('div.grandparent'));
// const valiLitems = nav.querySelectorAll('li');
// console.log(valiLitems);


//II. Таблица
// const body = document.body;

// body.innerHTML += `<table><tbody><tr><td>hello</td></tr></tbody></table>`

// let table = document.createElement('table');
// console.log(table);

/*
let div = document.createElement('div');
let textNode = document.createTextNode('I was created in Javascript') 
*/

/*div.append(textNode);
body.append(div)
*/

// const ol = document.querySelector('ol');

// ol.before('Add before ol');
// ol.after('Add after ol'); 

// let li = document.createElement('li');
// li.textContent = 'I was created in Javascript';
// ol.append(li);

// li = document.createElement('li');
// li.textContent = 'I was modified in JS';
// ol.prepend(li);

// ol.replaceWith('test');

/**TABLE CREATED IN JS */
/*
const data = [
    { name: 'Ivan', age: 24 },
    { name: 'Petar', age: 40 },
    { name: 'Mitko', age: 33 }
];

function createTable(data) {
    const body = document.body;
    const table = document.createElement('table');

    const dataKeys = Object.keys(data[0]);

    const tableHead = createTableHead(dataKeys);
    table.append(tableHead);

    const tableBody = createTableBody(data);
    table.append(tableBody);

    body.append(table);
}

function createTableHead(dataKeys) {
    const tableHead = document.createElement('thead');
    const tr = document.createElement('tr');

    for (let key of dataKeys) {
        const th = document.createElement('th');
        th.textContent = key;
        tr.append(th);
    }

    tableHead.append(tr);
    return tableHead;
}

function createTableBody(data) {
    const tableBody = document.createElement('tbody');

    data.forEach(item => {
        const tr = document.createElement('tr');

        Object.keys(item).forEach(key => {
            const td = document.createElement('td');
            td.textContent = item[key];
            tr.append(td);
        });

        tableBody.append(tr);
    });

    return tableBody;
}


fetch('https://jsonplaceholder.typicode.com/todos')
  .then((response) => response.json())
  .then((json) => {
    createModal('Successfully loaded the data!')
    createTable(json)
  });

  function createModal(text) {
    const div = document.createElement('div');
    div.style.position = 'absolute';
    div.style.top = '0';
    div.style.right = '0';
    div.style.background = 'green';
    div.style.color = 'white';
    div.style.width = 'fit-content';
    div.style.padding = '10px';

    const p = document.createElement('p');
    p.textContent = text

    div.append(p);
    document.body.append(div);

    setTimeout(() => div.remove(), 2000)
  }
  */

// let tr = document.createElement('tr');

// let th = document.createElement('th');
// let thText = document.createTextNode('Name');
// th.append(thText);
// tr.append(th);

// th = document.createElement('th');
// thText = document.createTextNode('Age');
// th.append(thText);

// tr.append(th);
// tableHead.append(tr);
// table.append(tableHead);


// let td = document.createElement('td');
// tdText = document.createTextNode('Ivan');
// td.append(tdText);

// tr.append(td);

// td = document.createElement('td');
// tdText = document.createTextNode('25');
// td.append(tdText);

// tr.append(td);
// tableHead.append(tr);

// tr = document.createElement('tr');

// td = document.createElement('td');
// tdText = document.createTextNode('Petar');
// td.append(tdText);

// tr.append(td);

// td = document.createElement('td');
// tdText = document.createTextNode('34');
// td.append(tdText);

// tr.append(td);
// tableHead.append(tr);
// table.append(tableBody);


// body.append(table);


const div = document.querySelector('.item');
console.log(div);

// div.className += ' container holder top-item'; 

div.classList.add('container'); 
div.classList.remove('container'); 
div.classList.toggle('container'); 
div.classList.contains('container'); 

div.style.width = '200px';
div.style.width = '';
div.style.cssText =
    `position: absolute;
top: 0;
right:0;
background-color:green;
color: white;
padding:10px;
div.style.width: fit-content;`

console.log(div.getAttribute("style")); 

div.setAttribute('id', 'modal-container');
div.removeAttribute('style');
console.log(div.hasAttribute('style'));

