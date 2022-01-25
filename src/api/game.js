import {BASE_URL_Question_DB} from './';

export async function apiAnswerRegister(questionAnswerOptions) {
    try {
        const response = await fetch(`${BASE_URL_Question_DB}/api.php?amount=${questionQuantity}&category=${questionCategory}&difficulty=${questionDifficulty}&type=${questionType}`);
        const data = await response.json();
        return [data.response_code, data.results];
    }
    catch(error) {
        return [[], error.message];

    }
}