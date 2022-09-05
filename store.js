export const workout_store = []; //тут будут храниться объекты set с данными о подходе

export const set_store = {
	exercise: '',
	number: 0,
	weight: 0,
	number_of_repetitions: 0,
}; // объект с данными о подходе

export const exerciseList_store = [
	'Жим лёжа со штангой',
	'Жим лёжа с гантелями',
	'Приседания со штангой',
	'Подтягивания',
	'Тяга штанги в наклоне',
	'Гиперэстензия',
	'Жим ногами',
]; //Список упражнений

export const numberOfSets_store = ['1', '2', '3', '4', '5', '6']; // подходы

export const numberOfRepetitions_store = [
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
	'25',
]; //повторения

export function createWorkout_store() {
	workout_store.add(set_store);
}

export function createSet_store(
	exercise,
	number,
	weight,
	number_of_repetitions
) {
	set_store.exercise = exercise;
	set_store.number = number;
	set_store.weight = weight;
	set_store.number_of_repetitions = number_of_repetitions;
}
