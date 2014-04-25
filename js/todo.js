window.onload = function(){

	var entry = document.forms["todo_form"];
	var button = document.getElementById('submit_todo');

	entry["todo_info"].onfocus = textDissapear;
	button.onclick = exchangeText;

	function textDissapear(){
		this.value = "";
		entry["todo_info"].style.color = "black";
	}


	function exchangeText(){
		var entry = document.forms["todo_form"];
			todoList = document.createElement("span");
			valueOfToDo = entry["todo_info"].value;
			entries = document.getElementsByTagName('span');

		entries.appendChild(todoList);

		var toDoEntry = document.getElementsByTagName('span');
		toDoEntry.innerHTML = valueOfToDo.innerHTML;
		document.getElementById('single_todo').innerHTML=valueOfToDo;
		entry["todo_info"].value = '';
	}

};
