function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();
    
    if (taskText !== "") {
      var taskObject = {
        text: taskText,
        date: new Date(),
        completed: false
      };
      
      tasks.push(taskObject);
      taskInput.value = "";
      displayTasks();
    }
  }
  
  function displayTasks() {
    var pendingTasksList = document.getElementById("pendingTasks");
    var completedTasksList = document.getElementById("completedTasks");
    
    pendingTasksList.innerHTML = "";
    completedTasksList.innerHTML = "";
  
    tasks.forEach(function(task, index) {
      var listItem = document.createElement("li");
      var checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = task.completed;
      checkbox.addEventListener("change", function() {
        toggleTask(index);
      });
  
      var taskText = document.createElement("span");
      taskText.textContent = task.text;
      taskText.className = task.completed ? "completed" : "";
  
      var deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", function() {
        deleteTask(index);
      });
  
      listItem.appendChild(checkbox);
      listItem.appendChild(taskText);
      listItem.appendChild(deleteButton);
  
      if (task.completed) {
        completedTasksList.appendChild(listItem);
      } else {
        pendingTasksList.appendChild(listItem);
      }
    });
  }
  
  function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
  }
  
  function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
  }
  
  var tasks = [];
  
  displayTasks();