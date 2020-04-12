"use strict"
var cont=3;

function addTask(){
	var inpt= document.getElementById('input-task').value;
	
	var parrElement= document.getElementById('tasks');
	
	var newDiv= document.createElement('div');
	var newCheckbox= document.createElement('input');
	newCheckbox.type= 'checkbox';
	
	newDiv.innerHTML= inpt;
	cont+=1;
	newDiv.id=String(cont);	

	parrElement.insertBefore(newDiv, parrElement.firstChild);
	newDiv.insertBefore(newCheckbox, newDiv.firstChild);			
}
