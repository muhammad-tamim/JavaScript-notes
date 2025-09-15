fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })

// Same with arrow functions
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => console.log(data))