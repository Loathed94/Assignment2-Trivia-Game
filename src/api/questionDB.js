import { BASE_URL_Question_DB } from ".";

export async function apiFetchQuestions(category, quantityVal){
    try {
        const response = await fetch(`${BASE_URL_Question_DB}/api.php?amount=${quantityVal}&category=${category}`);
        const data = await response.json();
        return [data.response_code, data.results];
    } catch (error) {
        return [[], error.message];
    }
}