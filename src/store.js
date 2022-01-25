import {createStore} from 'vuex';


export default createStore({
    state: {
        questions: [{"category":"Science & Nature","type":"multiple","difficulty":"medium","question":"The humerus, paired radius, and ulna come together to form what joint?","correct_answer":"Elbow","incorrect_answers":["Knee","Sholder","Ankle"]},{"category":"Science & Nature","type":"multiple","difficulty":"medium","question":"Which of these elements on the Periodic Table is a Noble Gas?","correct_answer":"Neon","incorrect_answers":["Potassium","Iodine","Colbalt"]},{"category":"Science & Nature","type":"multiple","difficulty":"medium","question":"About how old is Earth?","correct_answer":"4.5 Billion Years","incorrect_answers":["3.5 Billion Years","2.5 Billion Years","5.5 Billion Years"]},{"category":"Science & Nature","type":"multiple","difficulty":"medium","question":"What do you study if you are studying entomology?","correct_answer":"Insects","incorrect_answers":["Humans","the Brain","Fish"]},{"category":"Science & Nature","type":"multiple","difficulty":"medium","question":"Approximately how long is a year on Uranus?","correct_answer":"84 Earth years","incorrect_answers":["47 Earth years","62 Earth years","109 Earth years"]},{"category":"Science & Nature","type":"multiple","difficulty":"medium","question":"The medial meniscus forms which part of what joint in the human body?","correct_answer":"Knee","incorrect_answers":["Elbow","Ankle","Shoulder"]}, {"category":"Science & Nature","type":"boolean","difficulty":"medium","question":"The Neanderthals were a direct ancestor of modern humans.","correct_answer":"False","incorrect_answers":["True"]},{"category":"Science & Nature","type":"boolean","difficulty":"medium","question":"The Doppler effect applies to light.","correct_answer":"True","incorrect_answers":["False"]}],
        results: []
    },
    getters : {
    },
    mutations: {
       addResult: (state, result) => {
           state.results.push(result);
       }
    },
    actions: {
    }
})