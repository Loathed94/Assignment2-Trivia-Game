import {createStore} from 'vuex';
import { apiFetchCategories, apiFetchQuestions } from './api/questionDB';



export default createStore({
    state: {
        user: {
            username: "Test",
            highScore: 20,
        },
        categories: [],
        questions: [{
            "category":"Science & Nature",
            "type":"multiple",
            "difficulty":"medium",
            "question":"The humerus, paired radius, and ulna come together to form what joint?",
            "correct_answer":"Elbow",
            "incorrect_answers":["Knee","Sholder","Ankle"],
            "user_answer": "Knee"},
            {"category":"Science & Nature",
            "type":"multiple",
            "difficulty":"medium",
            "question":"Which of these elements on the Periodic Table is a Noble Gas?",
            "correct_answer":"Neon",
            "incorrect_answers":["Potassium","Iodine","Colbalt"],
            "user_answer": "Neon"},
            {"category":"Science & Nature",
            "type":"multiple",
            "difficulty":"medium",
            "question":"About how old is Earth?",
            "correct_answer":"4.5 Billion Years",
            "incorrect_answers":["3.5 Billion Years","2.5 Billion Years","5.5 Billion Years"],
            "user_answer": "2.5 Billion Years"},
            {"category":"Science & Nature",
            "type":"multiple",
            "difficulty":"medium",
            "question":"What do you study if you are studying entomology?",
            "correct_answer":"Insects",
            "incorrect_answers":["Humans","the Brain","Fish"],
            "user_answer": "Fish"},
            {"category":"Science & Nature",
            "type":"multiple",
            "difficulty":"medium",
            "question":"Approximately how long is a year on Uranus?",
            "correct_answer":"84 Earth years",
            "incorrect_answers":["47 Earth years","62 Earth years","109 Earth years"],
            "user_answer": "84 Earth years"},
            {"category":"Science & Nature",
            "type":"multiple",
            "difficulty":"medium",
            "question":"The medial meniscus forms which part of what joint in the human body?",
            "correct_answer":"Knee",
            "incorrect_answers":["Elbow","Ankle","Shoulder"],
            "user_answer": "Knee"}]
    },
    getters : {
    },
    mutations: {
       setCategories: (state, categories) => {
           state.categories = categories;
       },
       setQuestions: (state, questions) => {
           state.questions = questions;
       },
       setHighscore: (state, newHighscore) => {
           state.user.highScore = newHighscore;
       }
    },
    actions: {
        async fetchCategories({commit}){
            const [categories, error] = await apiFetchCategories();
            if(error !== null){
                return error;
            }
            commit("setCategories", categories);
            localStorage.setItem("categories", JSON.stringify(categories));
        },
        async fetchQuestions({commit}, {category, quantityVal, difficultyVal}){
            const [code, results] = await apiFetchQuestions(category, quantityVal, difficultyVal);
            if(parseInt(code) === 0){
                commit("setQuestions", results);
                return null;
            }
            else if(parseInt(code) === 1){
                return "ERROR: Too many questions, try reducing amount of questions or change one of the other settings.";
            }
            else if(parseInt(code) === 2){
                return "ERROR: Developer fucked up, request sent was invalid.";
            }
            else if(parseInt(code) === 3){
                return "ERROR: Token invalid.";
            }
            else if(parseInt(code) === 4){
                return "ERROR: Reset token and try again.";
            }
        },
        async patchNewHighscore({commit, state}, {highscore}){

        }
    }
})