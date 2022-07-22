import axios from 'axios'

axios.get('https://api.github.com/users/MMedeiros03').
    then(response => {
        console.log(response)
    })