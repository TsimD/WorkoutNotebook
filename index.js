const getSelectExercise = document.querySelector('.js-select-exercise'); 
const getSelectSets = document.querySelector('.js-select-sets'); 
const getSelectRepetitions = document.querySelector('.js-select-repetitions'); 
const getInputExercise = document.querySelector('.js-input-exercise');
const getInputRepetitions = document.querySelector('.js-input-repetitions');
const getInputWeight = document.querySelector('.js-input-weight');
const btnExercise = document.querySelector('.js-button-exercise');
const btnRepetitions = document.querySelector('.js-button-repetitions');
const btnWeight = document.querySelector('.js-button-weight');

const exerciseList =[  //Список упражнений
    "Жим лёжа со штангой",
    "Жим лёжа с гантелями",
    "Приседания со штангой",
    "Подтягивания",
    "Тяга штанги в наклоне",
    "Гиперэстензия",
    "Жим ногами",
  
];

const numberOfSets=[
    '1',
    '2',
    '3',
    '4',
    '5',
    '6'
];

const numberOfRepetitions=[
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',
    '25'
];
exerciseList.forEach((item, i)=>{
    let exercise=''; 
    exercise = `<option class="exercise" value="${i}">${item}</option>`;
    getSelectExercise.innerHTML+= exercise;
}
);

numberOfSets.forEach((item,i)=>{
    let set=''; 
    set = `<option class="set" value="${i}">${item}</option>`;
    getSelectSets.innerHTML+= set;
}
);

numberOfRepetitions.forEach((item, i)=>{
    let repetition=''; 
    repetition = `<option class="exercise" value="${i}">${item}</option>`;
    getSelectRepetitions.innerHTML+= repetition;
}
);
