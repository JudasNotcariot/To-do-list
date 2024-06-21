document.getElementById('add-task-btn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('new-task');
    const reminderInput = document.getElementById('task-reminder');
    const taskList = document.getElementById('task-list');

    if (taskInput.value.trim() === '') {
        alert('Please enter a task.');
        return;
    }

    const taskItem = document.createElement('li');

    const taskContent = document.createElement('div');
    taskContent.classList.add('task-content');
    const taskText = document.createElement('span');
    taskText.textContent = taskInput.value;
    taskContent.appendChild(taskText);
    
    if (reminderInput.value) {
        const taskReminder = document.createElement('span');
        taskReminder.textContent = `Reminder: ${new Date(reminderInput.value).toLocaleString()}`;
        taskReminder.style.color = "#888";
        taskContent.appendChild(taskReminder);
    }

    const taskActions = document.createElement('div');
    taskActions.classList.add('task-actions');

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.classList.add('complete-button');
    completeButton.addEventListener('click', () => {
        taskItem.classList.toggle('completed');
    });

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('edit-button');
    editButton.addEventListener('click', () => {
        const newTask = prompt('Edit your task:', taskText.textContent);
        if (newTask !== null) {
            taskText.textContent = newTask;
        }
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(taskItem);
    });

    taskActions.appendChild(completeButton);
    taskActions.appendChild(editButton);
    taskActions.appendChild(deleteButton);

    taskItem.appendChild(taskContent);
    taskItem.appendChild(taskActions);
    taskList.appendChild(taskItem);

    taskInput.value = '';
    reminderInput.value = '';
}
