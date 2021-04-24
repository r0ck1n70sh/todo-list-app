'use strict'
import {Task} from './task.js';

let cnt = 0;

$('#btn-input').click(() => {
	let inputText = $('#input-input').val();
	let $newTask = Task(inputText);
	$('#div-tasks').prepend($newTask);

	cnt++;
	console.log(cnt);
});

$('.input[type=checkbox]').each(() => {
	$(this).find('input').change(() => {
		console.log(`${cnt} checked`);
	});
});

$('#btn-reset').click(() => {
	$('#div-tasks').empty();
})

