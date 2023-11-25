// setTimeout(() => {
//     console.log('one');
// }, 1000);

// setTimeout(() => {
//     console.log('two');
// }, 500);

// setTimeout(() => {
//     console.log('three');
// }, 2000);

// setInterval(() => {
//     console.log('Done');
// }, 1000)

//promise
// let promise = new Promise(function(resolve, reject) {
//     //code to be excecuted
//     //resolve(value)
//     //reject(error)

//     setTimeout(() => {
//         reject('Something go wrong!')
//     }, 2000);
//     setTimeout(() => {
//         resolve('ev ok');
//     }, 3000);
// });

// promise.then(value => console.log(value));
// promise.catch(error => console.log(error));
// promise.finally(() => console.log('finnaly')); 

// new Promise(function(resolve, reject) {
//     //code to be excecuted
//     //resolve(value)
//     //reject(error)

//     setTimeout(() => {
//         reject('Something go wrong!')
//     }, 4000);
//     setTimeout(() => {
//         resolve('ev ok');
//     }, 3000);
// }).then((value) => console.log(value))
// .catch(err => console.log(err))
// .finally(() => console.log('Thats all folks'));

// async function foo() {
//     //return 42; 
//     //return Promise.resolve(42);

//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve("finito"), 1000);
//     })
//     let results = await promise;
//     console.log(results);
//     //return results;
// }

// // foo().then((value) => console.log(value)).catch(err => console.log(err));
// console.log('opa');
// foo();
// console.log('opa2');

// Promise.all([
//     new Promise(resolve => setTimeout(() => resolve(1), 3000)),
//     new Promise(resolve => setTimeout(() => resolve(2), 2000)),
//     new Promise(resolve => setTimeout(() => resolve(3), 2500))
// ]).then(value => console.log(value)) 

// Promise.race([
//     new Promise(resolve => setTimeout(() => resolve(1), 3000)),
//     new Promise((resolve,reject) => setTimeout(() => reject(2), 2000)),
//     new Promise(resolve => setTimeout(() => resolve(3), 2500))
// ]).then(value => console.log(value)) 

// Promise.any([
//     new Promise(resolve => setTimeout(() => resolve(1), 3000)),
//     new Promise((resolve, reject) => setTimeout(() => reject(2), 2000)),
//     new Promise(resolve => setTimeout(() => resolve(3), 2500))
// ]).then(value => console.log(value)) 

// let promise = fetch(url, {options});
// async function getPosts() {
//     let response = await fetch(`https://jsonplaceholder.typicode.com/posts`);

//     if(response.ok) {
//         let json = await response.text();
//         console.log(json);
//     } else {
//         console.log('error');
//     }
// }

// getPosts();

// const obj = {
//     "userId": 1,
//     "id": 1,
//     "title": 'sunt aut facere repallat provident',
//     "body": 'quay et ucuhg ubhfr vuhvj f'
// }

// fetch(`https://jsonplaceholder.typicode.com/posts?id=10`, {
//     method:'POST',
//     headers:{
//         // Authentication: "super secret",
//         // Authorization: "Beared gggn",
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify(obj)
// })
//     .then(reponse => reponse.json())
//     .then(json => readPost(json))
//     .catch(err => console.log(err));

// function readPost(posts) {
//     for (let post of posts) {
//         console.log(post);
//     }
// }

/**
 * GET, DELETE 
 * POST, PUT, PATCH  
 */

// const obj = {
//     "userId": 1,
//     "id": 1,
//     "title": 'sunt aut facere repallat provident',
//     "body": 'quay et ucuhg ubhfr vuhvj f'
// }

// let xhr = new XMLHttpRequest();
// xhr.open('POST', `https://jsonplaceholder.typicode.com/posts`); // отваряме readyState

// xhr.setRequestHeader('Content-Type',"application/json");

// xhr.onload = function() { 
//     console.log(xhr.status, xhr.response);
// }

// xhr.onerror = function () { 
//     if(xhr.status > 399) {
//         console.log(`Error ${xhr.status}: ${xhr.statusText}`);
//     } else {
//         console.log(`${JSON.parse(xhr.response)}`);
//     }
// }

// xhr.send(JSON.stringify(obj)); 

// // xhr.onprogress = function () { 
// //     console.log(event, 'Event');
// // }

const form = document.querySelector('#login');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const username = form.querySelector('input[name="username"]').value;
    const password = form.querySelector('input[name="password"]').value;
    console.log(username);
    console.log(password);

    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            document.body.append('You logged in')
        })
})



