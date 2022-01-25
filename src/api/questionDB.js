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
export async function apiFetchQuestions(category, quantityVal, difficultyVal){
    try {
        const response = await fetch(`${BASE_URL_Question_DB}/api.php?amount=${quantityVal}&category=${category}&difficulty=${difficultyVal}`);
        const data = await response.json();
        return [data.response_code, data.results];
    } catch (error) {
        return [[], error.message];
    }
}