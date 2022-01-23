import { BASE_URL_Question_DB } from ".";


export async function apiFetchCategories(){
    try {
        const response = await fetch(`${BASE_URL_Question_DB}/api_category.php`);
        const trivia_categories = await response.json();
        return [trivia_categories, null];
    } catch (error) {
        return [[], error.message];
    }
}