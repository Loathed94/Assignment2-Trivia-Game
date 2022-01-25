import {BASE_URL} from "./";
import { API_KEY } from "./";

let users = [];

export async function apiGetUsers(username){ //Vi kanske borde döpa alla funktioner i api-mappen till namn med "api" i början, så det blir tydligare.
    fetch(`${BASE_URL}/trivia?username=${username}`)
    .then(response => response.json())
    .then(results => {
        if(results.length === 0){
          //Return user does not exist.
          console.log("User does not exist") 
          console.log("Results:", results) 

        }
        else{
          for (const user of results) {
            if(user.username === username){
              //Return that user exists.
              console.log("User exists", user.username)
              return results
            }
          }
        }
          if(score in results){
            results.highScore = results.score
            delete results.score
          }
    })
    .catch(error => {
        console.log(error)
    })
}
export  async function apiUserRegister(username){

  const checkUser = await apiGetUsers(username);

  if(checkUser == username){
    console.error("User already exists")
  }
  
  fetch(`${BASE_URL}/trivia?username=${username}`)
    .then(response => response.json())
    .then(results => {
        if(results.length === 0){
          //Return user does not exist.
          console.log("User does not exist") 
          console.log(results)
          
        }
        else{
          for (const user of results) {
            if(user.username === username){
              //Return that user exists.
              users.push(username);
              console.log("Users", users)
              console.log("User exists", user.username)
              return results
            }
          }
        }
    })
    .catch(error => {
        console.log(error)
    })


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

  })  
  .catch(error => {
    console.log(error)
})

}


