//Получаю доступ к объекту карточки в которую буду рендерить Информацию с упражнением
const cardExercise = document.querySelector(".cardExercise");
//получил доступ к селектору с выбором упражнений
const getSelectExercise = document.querySelector(".js-select-exercise");
//получил доступ к кнопке выбора упражнений
const btnExercise = document.querySelector(".js-button-exercise");
//получил доступ к инпуту с веденным упражнением
const getInputExercise = document.querySelector(".js-input-exercise");



console.log(getInputExercise.value);

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

function renderSelect (select, arr,  className =''){ //функция рендера селектов
  arr.forEach((item, i) => {
    let htmlOption = "";
    htmlOption = `<option class=${className} ">${item}</option>`;
    select.innerHTML += htmlOption;
  });
}
renderSelect(getSelectExercise, exerciseList,  'exercise');// рендер селекта с упражнениями

function inputValue(inputName){ // проверяю ввел ли что то пользователь в input
  if(inputName.value==='' || inputName.value===null	|| inputName.value===undefined){
    return false;
} 
return true;
}

btnExercise.addEventListener("click", (event) => {
document.querySelector('.exercise').classList.add('hide'); //прячу выбор упражнения после его выбора

let card = 
  `<h3 class="cardItem">${ //если пользователь не ввел в ручную название то выводим его из селектора
    !inputValue(getInputExercise) ? getSelectExercise.value : getInputExercise.value
  }</h3>   

  <button class="js-button-ready">ГОТОВО</button>

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
    </div>`;


  // рендерю в карточку выбранное упражнение и интерфейс с выбором подходов, повторений, веса
  cardExercise.innerHTML += card;

  const getSelectSets = cardExercise.querySelector(".js-select-sets"); //селектор подходов
  //селектор повторений
  const getSelectRepetitions = cardExercise.querySelector(
    ".js-select-repetitions"
  );
  //ввод повторений
  const getInputRepetitions = cardExercise.querySelector(
    ".js-input-repetitions"
  );
  const getInputWeight = cardExercise.querySelector(".js-input-weight"); // ввод веса
  const btnRepetitions = cardExercise.querySelector(".js-button-repetitions"); //кнопка ввода повторений
  const btnWeight = cardExercise.querySelector(".js-button-weight"); //кнопка ввода веса
  const btnReady = cardExercise.querySelector(".js-button-ready"); // кнопка ГОТОВО
  btnReady.addEventListener("click", ()=>{
    document.querySelector('.exercise').classList.remove('hide');
  });

  renderSelect(getSelectSets, numberOfSets, 'set'); //закидываю в селектор подходы
  renderSelect(getSelectRepetitions, numberOfRepetitions, 'repetition'); // закидываю в селектор повторения
});

// нужно решить как делать чтоб работали селекторы конкретной карточки, возможно карточке давать какой_=-то дата атрибут