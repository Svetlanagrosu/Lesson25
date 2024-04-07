fetch('https://jsonplaceholder.typicode.com/users')

.then((res )=> res.json())
.then((data)=> console.log(data))

.then((res) => res.json())
.then((data) => data.forEach(item => console.log(item.name)))


/////
const newUser = {
    name: 'Andry',
    username:'Chack',
    city: 'Atlanta'
}
fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    body: JSON.stringify(newUser),
    headers: {
        'Content-type': 'application/json; chsrset=UTF-8',  
    }
})
.then((res) => res.json())
.then((data => console.log(data)))

////


const root = document.getElementById('root')
const renderItem = (list) => {
    list.forEach((item)=> {
        const element = document.createElement('div')
        item.textContent = item.username
        root.appendChild(element)
    })
}
fetch('https://jsonplaceholder.typicode.com/users')
.then((res)=> {
    if (res.status !== 200) {
        throw Error(res.status);
    }
    return res.json()
})
.then((data) => {
    renderItems(data)
})
    
.catch((err) => console.log('err', err))







