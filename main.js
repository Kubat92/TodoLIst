let btn = document.querySelector('.add_btn');
let todoInput = document.querySelector('.todo_input');
let taskBLock = document.querySelector('.task_block');


btn.addEventListener("click", function(){

  let val = todoInput.value;
  todoInput.value = "";

  if(!val){
    alert("введите что-нибудь в поле");
  }

  let taskCont = document.createElement('div');
  taskCont.classList.add('task_cont');

  let taskChek = document.createElement('input');
  taskChek.type = "checkbox";
  taskChek.classList.add('task_check')


  let taskInput = document.createElement('input');
  taskInput.classList.add('task_input');
  taskInput.value = val;
  taskInput.setAttribute('readonly', 'readonly');

  let editBtn = document.createElement('button');
  editBtn.classList.add('task_edit');
  editBtn.innerText = "edit";
      
  let remvBtn = document.createElement('button');
  remvBtn.classList.add('task_remove');
  remvBtn.innerText = "x";

  taskBLock.prepend(taskCont);
  taskCont.appendChild(taskChek);
  taskCont.appendChild(taskInput);
  taskCont.appendChild(editBtn);
  taskCont.appendChild(remvBtn);

  taskChek.addEventListener('click', () => {
    if(taskChek.checked){
      taskInput.classList.add('task_checked');
      editBtn.classList.add('task_checked');
      editBtn.setAttribute('disabled', 'disabled');
      taskBLock.append(taskCont);
    }else{
      taskInput.classList.remove('task_checked');
      editBtn.classList.remove('task_checked');
      editBtn.removeAttribute('disabled');
      taskBLock.prepend(taskCont);
    };
  });
  

  remvBtn.addEventListener('click', () => {
    taskBLock.removeChild(taskCont);
  });

  
  editBtn.addEventListener('click', () => {
    if (editBtn.innerText == 'edit'){
      taskInput.removeAttribute('readonly');
      editBtn.innerText = 'save';
      taskInput.focus();
    }else{
      taskInput.setAttribute('readonly', 'readonly');
      editBtn.innerText = 'edit';
    }
  });

});





