//Получаю доступ к объекту карточки в которую буду рендерить Информацию с упражнением
const cardExercise = document.querySelector(".cardExercise");  
//получил доступ к селектору с выбором упражнений
const getSelectExercise = document.querySelector(".js-select-exercise");  
//получил доступ к кнопке выбора упражнений
const btnExercise = document.querySelector(".js-button-exercise");    
//получил доступ к инпуту с веденным упражнением
const getInputExercise = document.querySelector(".js-input-exercise");


const exerciseList = [
  //Список упражнений
  "Жим лёжа со штангой",
  "Жим лёжа с гантелями",
  "Приседания со штангой",
  "Подтягивания",
  "Тяга штанги в наклоне",
  "Гиперэстензия",
  "Жим ногами",
];

const numberOfSets = ["1", "2", "3", "4", "5", "6"]; // подходы
//повторения
const numberOfRepetitions = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
];

exerciseList.forEach((item, i) => {
  let exercise = "";
  exercise = `<option class="exercise" ">${item}</option>`;
  getSelectExercise.innerHTML += exercise;
});

btnExercise.addEventListener("click", (event) => {
  let card = `
<h3 class="cardItem">${getSelectExercise.value}</h3>   

</div>
    <p class="sets-p">Выберите кол-во подходов</p>
    <div class="sets">
      <select class="js-select-sets"></select>
    </div>

    <div class="repetitions">
        <p class="sets-p">Выберите или введите кол-во повторений</p>
      <select class="js-select-repetitions"></select>
      <input
        class="js-input-repetitions"
        type="text"
        placeholder="введите кол-во"
      />
      <button class="js-button-repetitions">ВВОД</button>
    </div>

    <div class="weight">
        <p class="sets-p">Введите вес снаряда</p>
      <input class="js-input-weight" type="text" placeholder="введите вес" />
      <button class="js-button-weight">ВВОД</button>
    </div>
    `;
  cardExercise.innerHTML += card; // рендерю в карточку выбранное упражнение и интерфейс с выбором подходов, повторений, веса

  const getSelectSets = cardExercise.querySelector(".js-select-sets");//селектор подходов
  //селектор повторений
  const getSelectRepetitions = cardExercise.querySelector( 
    ".js-select-repetitions"
  );
  //ввод повторений
  const getInputRepetitions = cardExercise.querySelector(
    ".js-input-repetitions"
  );
  const getInputWeight = cardExercise.querySelector(".js-input-weight");// ввод веса
  const btnRepetitions = cardExercise.querySelector(".js-button-repetitions");//кнопка ввода повторений
  const btnWeight = cardExercise.querySelector(".js-button-weight");//кнопка ввода веса

  numberOfSets.forEach((item, i) => {
    let set = "";
    set = `<option class="set" value="${i}">${item}</option>`;
    getSelectSets.innerHTML += set;
  }); //закидываю в селектор подходы

  numberOfRepetitions.forEach((item, i) => {
    let repetition = "";
    repetition = `<option class="exercise" value="${i}">${item}</option>`;
    getSelectRepetitions.innerHTML += repetition;
  }); // закидываю в селектор повторения
});
