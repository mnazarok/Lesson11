async function getToDo() {
    const res = await fetch ("https://jsonplaceholder.typicode.com/todos/1")
    const data = await res.json();
    return data;
};

const toDo = await getToDo();
console.log('todo', toDo);

async function getUsers() {
    const res = await fetch ("https://jsonplaceholder.typicode.com/users/1")
    const data = await res.json();
    return data;
};

const users = await getUsers();
console.log('Users', users);
