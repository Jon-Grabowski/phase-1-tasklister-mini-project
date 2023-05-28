document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('form')
  form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const taskList = document.getElementById('tasks');
    let listElement = document.createElement('li');
    listElement.innerText = e.target['new-task-description'].value;
    taskList.append(listElement);
    form.reset();

    button = document.createElement('button');
    button.innerText = 'X';
    listElement.append(button);
    console.log(button)
    //console.log(e.target['new-task-description'].value);

  });
});

