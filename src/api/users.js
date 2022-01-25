import {BASE_URL} from "./";
import { API_KEY } from "./";

//let users = [];

export async function apiGetUsers(userName){
    console.log("GetUsers: ",userName);
    let newUser = null;
    await fetch(`${BASE_URL}/trivia?username=${userName}`)
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
await fetch(`${BASE_URL}/trivia`, {
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


