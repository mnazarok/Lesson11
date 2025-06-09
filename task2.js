const getToDo = () => {
    return fetch ("https://jsonplaceholder.typicode.com/todos/1")
    .then(res => {
        return res.json();
    })
    .then(res => {
        console.log('to Do', res);
        return res;
        
    }) 
    .catch(err =>{
        console.log('Error', err);
    })
};

const getUsers = () => {
    return fetch ("https://jsonplaceholder.typicode.com/users/1")
    .then(res => {
        return res.json();
    })
    .then(res => {
        console.log('Users', res);
        return res;
        
    }) 
    .catch(err =>{
        console.log('Error', err);
    })
};

getToDo();
getUsers();


//Task3
Promise.all([getToDo(), getUsers()])
    .then(values => console.log("All done:", values))
  .catch(err => console.error("Failed:", err));