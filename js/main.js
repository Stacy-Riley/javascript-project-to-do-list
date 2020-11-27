// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
//var close = document.getElementsByClassName("close");
//for (var i = 0; i < close.length; i++) {
//  close[i].onclick = function() {
//   var div = this.parentElement;
//   div.style.display = "none";
//  }
//}


//Add a "checked symbol when clicking on a list item"
	var list = document.querySelector('ul');
	list.addEventListener('click', function(ev) {
		if(ev.target.tagName === 'LI') {
			ev.target.classList.toggle('checked');
		}
	}, false);


//document.getElementById("add-task-btn").onclick = 
	
	function newElement(){
		var inputValue = document.getElementById("input-task").value;
		//var errorMessage = document.getElementById("error");
		var li = document.createElement("li");
		var t = document.createTextNode(inputValue);
		li.appendChild(t)


	if(inputValue === ''){
		//creates alert mesage if no text is entered
		alert("Please enter a task.")
	} else {
		//creates new list item
		document.getElementById("myUL").appendChild(li);
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
  	//this appends the span/delete ability to the li element
  	li.appendChild(span);

  	//removes the list item once the "x" is clicked
  	span.addEventListener('click', () => {
  		li.remove();
  	})
 
  	//this appends the newly created li element to the ul element
  	//ul.appendChild(li);
}




