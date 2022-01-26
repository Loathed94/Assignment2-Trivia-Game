import {BASE_URL_TRIVIA_API} from "./";
import { API_KEY } from "./";

//let users = [];

export async function apiGetUsers(userName){
    console.log("GetUsers: ",userName);
    let newUser = null;
    await fetch(`${BASE_URL_TRIVIA_API}/trivia?username=${userName}`)
    .then(response => response.json())
    .then(results => {
        if(results.length === 0){
          newUser = null;
        }
        else{
          for (const user of results) {
              console.log("For-loop GetUser: ", user.username);
            if(user.username === userName){
                if(user.score !== undefined){
                    delete user.score;
                }
                console.log("users: ",user);
                newUser = user;
                console.log(newUser);
            }
          }
        }
    })
    .catch(error => {
        console.log(error)
    })
    return newUser;
}
export  async function apiUserRegister(userName){
let user;
await fetch(`${BASE_URL_TRIVIA_API}/trivia`, {
    method: 'POST',
    headers: {
        'X-API-Key': API_KEY,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ 
        username: userName, 
        highScore: 0 
    })
})
.then(response => {
  if (!response.ok) {
    throw new Error('Could not create new user')
  }
  return response.json()
})
.then(newUser => {
    console.log(newUser)
  user = newUser
})
.catch(error => {
    user = null
})
return user
}

export async function apiUpdateHighScore(userId){
  fetch(`${BASE_URL_TRIVIA_API}/trivia/${userId}`, {
    method: 'PATCH', // NB: Set method to PATCH
    headers: {
        'X-API-Key': API_KEY,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        // Provide new highScore to add to user with id 1
        highScore: 10
    })
})
.then(response => {
  if (!response.ok) {
    throw new Error('Could not update high score')
  }
  return response.json()
})
.then(updatedUser => {
  // updatedUser is the user with the Patched data
  console.log(updatedUser);
})
.catch(error => {
})
}


