//G E T
fetch('https://jsonplaceholder.typicode.com/users?_limit3' ,{
    method: 'GET'
}) 
    .then((res)=>{
        if (res.status !== 200) {
           throw Error(res.status);
    }
    return res.json()
})
    .then((data) => console.log(data))
    .catch((err) => console.log('err',err))

// P   O   S   T
const newUser = {
    name: 'Scarlet Ohara',
    username: 'Liam',
    city: 'Rio'
}
fetch('https://jsonplaceholder.typicode.com/users?_limit3' ,{
    method: 'POST',
    body: JSON.stringify(newUser),
    headers: {
        'Content-type': 'application/json; carset=UTF-8',
    }
 })
 .then((res)=> res.json())
 .then((data => console.log(data))) 

//Node index:id: 11,name: 'Scarlet Ohara',Username:'Liam',city:'Rio'

//P  U  T
const newUser = {
    name: 'Scarlet Ohara',
    username: 'Liam',
    city: 'Rio'
}
fetch('https:jsonplaceholder.typicode.com/users/1', {
    method: 'PUT',
    body: JSON.stringify(newUser),
    headers: {
       'Content-type': 'application/json; chsrset=UTF-8',
    }
})
.then((res) => res.json())
.then((data => console.log(data)))
// index:post+Id

// D E L E T E


fetch('https://jsonplaceholder.typicode.com/users/1', {
    method: 'DELETE',
})
.then((res) => resizeBy.json())
.then((data => console.log(data)))

//Node index:{}



