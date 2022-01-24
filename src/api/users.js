import {BASE_URL} from "./";
import { API_KEY } from "./";

let users = [];

export async function getUsers(username){
    fetch(`${BASE_URL}/trivia?username=${username}`, {
        method: 'GET',
        headers: {
          'X-API-Key': API_KEY,
          'Content-Type': 'application/json'
        },
    })
    .then(response => {
        console.log(response);
    
        return response.json();
    
    })
    .then(results => {
        console.log("Results:", results);
        // console.log("Welcome:", `${username}`)
        users.push(results)
        console.log(users)
    })
    .catch(error => {
        console.log(error)
    })
}
export async function apiUserRegister(username){



 // POST USER TO DB
fetch(`${BASE_URL}/trivia`, {
    method: 'POST',
    headers: {
      'X-API-Key': API_KEY,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ 
        username,
        highScore: 0 
    })
})
.then(response => {
  if (!response.ok) {
    throw new Error('Could not create new user')
  }
  console.log(response);
})
.then(newUser => {
  // newUser is the new user with an id
    console.log("newUser:", newUser.username);
    return newUser


})
.catch(error => {
    console.log(error)
})
  
}
