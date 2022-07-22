const url="http://localhost:5500/api"

function getUsers(){
    fetch(url)
    .then((result) => result.json())
    .then(data => renderApiresult.textContent = JSON.stringify(data))
    .catch((err) => {
        console.error(err)
    });
}getUsers()


function getUser(){
    fetch(`${url}/18`)
    .then((result) => result.json())
    .then(data => {
        UserName.textContent = data.name
        UserCity.textContent = data.city
        userAvatar.src = data.avatar
    })
    .catch((err) => {
        console.error(err)
    });
}getUser()

const newUser = {
    name : "Olivia Zars",
    city: "Blumenau",
    avatar: "http://picsum.photos/200/300"
}

function addUser(newUser){
    fetch(url,{
        method:"POST", 
        body: JSON.stringify(newUser), 
        headers:{
            "Content-type": "application/json;charset=UTF-8"
        }})
    .then(response => response.json)
    .then(data => alertApi.textContent = data)
    .catch(err => console.log(err))
}
addUser(newUser)