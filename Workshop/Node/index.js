const http = require('http');

const fs = require('fs');
const path = require('path');

const users = 
[
  {
      "id": 0,
      "name": "Unknown user"
  },
  {
      "id": 1,
      "name": "Leanne Graham"
  },
  {
      "id": 2,
      "name": "Ervin Howell"
  },
  {
      "id": 3,
      "name": "Clementine Bauch"
  },
  {
      "id": 4,
      "name": "Patricia Lebsack"
  },
  {
      "id": 5,
      "name": "Chelsey Dietrich"
  },
  {
      "id": 6,
      "name": "Mrs. Dennis Schulist"
  },
  {
      "id": 7,
      "name": "Kurtis Weissnat"
  },
  {
      "id": 8,
      "name": "Nicholas Runolfsdottir V"
  },
  {
      "id": 9,
      "name": "Glenna Reichert"
  },
  {
      "id": 10,
      "name": "Clementina DuBuque"
  }
];

const task = 
[
  {
    userId:1,
    id: 1,
    title: 'yee basi kefa',
    completed: false
  }
];

const express = require('express');
const app = express(); 

app.get('/users', function(req, res) {
  res.send(JSON.stringify(users));
});

app.get('/tasks', function(req,res) {
  res.send(JSON.stringify(tasks));
});

app.get('/', function(req,res) {
  let htmlFilePath = path.join(__dirname, 'public', "index.html");

  fs.readFile(htmlFilePath, (err, content) => {
    if(err) {
      console.log('Error', err);
    } else {
      res.contentType('text/html');
      res.send(content);
    }
  })
});

app.listen(3000);

// const server = http.createServer((req, res) => {
//     let responseMessage = 'Hello world, from the server';
//     let contentType = 'text/html';

//     let htmlFilePath = path.join(__dirname, 'public', "index.html");

//     // if (req.url === '/users') {
//     //     responseMessage = JSON.stringify(users);
//     //     contentType = 'application/json';
//     // };

//     // if(req.url === '/tasks') {
//     //   responseMessage = JSON.stringify(task);
//     //   contentType = 'application/json'
//     // };

    
//     // res.statusCode = 200;
//     // res.setHeader('Access-Control-Allow-Origin', '*');
//     // res.setHeader("Content-Type", contentType);
//     // res.end(responseMessage);

// });

// const hostname = '127.0.0.1'
// const PORT = 3001;
// server.listen(PORT, hostname, () => {
//     console.log(`Server is running on http://${hostname}:${PORT}`);
// })