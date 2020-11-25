
	var tasker = document.getElementById("tasker");
	//var errorMessage = document.getElementById("error");
	var taskerHeader = document.getElementById("tasker-header");
	//var taskInput = document.getElementById("input-task");
	var addTaskBtn = document.getElementById("add-task-btn");
	var taskList = document.getElementById("tasks");
	var taskListChildren = this.taskList.children;

//add a "checked symbol when clicking on a list item"
	var list = document.querySelector('ul');
	list.addEventListener('click', function(ev) {
		if(ev.target.tagName === 'LI') {
			ev.target.classList.toggle('checked');
		}

	}, false);




document.getElementById("add-task-btn").onclick = 
	
	function newElement(){
		var inputTask = document.getElementById("input-task").value;
		var errorMessage = document.getElementById("error");
		var li = document.createElement("li");
		var t = document.createTextNode(inputTask);
		li.appendChild(t)


	if(inputTask === ''){
		//creates error mesage if no text is entered
		errorMessage.textContent = "Please enter a task";
		errorMessage.style.color = "red";
	} else {
		//creates new list item
		document.getElementById("tasks").appendChild(li)
	}
	//removes the newly typed item from the input-task field
	document.getElementById("input-task").value = "";
	
	//creates the span element to hold the "x"
	var span = document.createElement("SPAN");
	//creates the visual "x" (or any text) next to the list item 
  	var txt = document.createTextNode("\u00D7");  
  	//assigns a class name for styling
  	span.className = "close";
  	//appends the text to the span element
  	span.appendChild(txt);
  	//removes the list item once the "x" is clicked
  	span.addEventListener('click', () => {
  		li.remove();
  	})
  	//this appends the span/delete ability to the li element
  	li.appendChild(span);
  	//this appends the newly created li element to the ul element
  	ul.appendChild(li);
}




