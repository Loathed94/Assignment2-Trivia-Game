import { BASE_URL_Question_DB } from ".";


export async function apiFetchCategories(){
    try {
        const response = await fetch(`${BASE_URL_Question_DB}/api_category.php`);
        const data = await response.json();
        return [data.trivia_categories, null];
    } catch (error) {
        return [[], error.message];
    }
}
export async function apiFetchQuestions(category, quantityVal, difficultyVal, token){
    try {
        let response;
        if(token === null){
            response = await fetch(`${BASE_URL_Question_DB}/api.php?amount=${quantityVal}&category=${category}&difficulty=${difficultyVal}`);
        }
        else{
            response = await fetch(`${BASE_URL_Question_DB}/api.php?amount=${quantityVal}&category=${category}&difficulty=${difficultyVal}&token=${token}`);
        }
        const data = await response.json();
        return [data.response_code, data.results];
    } catch (error) {
        return [[], error.message];
    }
}
export async function apiRequestToken(){
    try {
        let code = 1;
        let token = "";
        while(code !== 0){
            const response = await fetch(`${BASE_URL_Question_DB}/api_token.php?command=request`);
            const contents = await response.json();
            code = contents.response_code;
            token = contents.token;
        }
        return [code, token];
    } catch (error) {
    }
}
export async function apiResetToken(token){
    const response = await fetch(`${BASE_URL_Question_DB}/api_token.php?command=reset&token=${token}`);
    const content = await response.json();
    const code = content.response_code;
    console.log(code);
    return code;
}