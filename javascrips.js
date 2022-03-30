
let storedTasks = [];
      storedTasks = JSON.parse(localStorage.getItem('tasksList')) || [];

      function updateTasks () {
            storedTasks.forEach(task => {
            let newTaskName = task.title;
            let newTaskDate = task.date;

            let newlist = document.createElement('li');
            newlist.innerHTML = `<span class = 'updatelist'> <span> ${newTaskName} </span> <span> ${newTaskDate} </span> </span>
            <button type="button" onclick="edit(event)" class="button">Edit</button>
            <button type="button"  onclick="del(event)" class="button">Delete</button>`;
            document.getElementById('list').append(newlist);
            })
        }

      function updateStorage () {
          let tasksArray = [];

          let Tasks = document.getElementsByClassName('updatelist');

         let TasksList = Array.from(Tasks);
         TasksList.forEach(Element => {
             let obj = {};
             obj.title = Element.children[0].innerText;
             obj.date = Element.children[1].innerText;

             tasksArray.push(obj);
         })

         localStorage.setItem('tasksList', JSON.stringify(tasksArray));

         storedTasks = JSON.parse(localStorage.getItem('tasksList'));

      }


      function addTaskHandler() {
    let taskitem = document.getElementById('input-text').value;
    let taskdate = document.getElementById('input-date').value;
    let newlist = document.createElement('li');
    newlist.innerHTML = `<span class = 'updatelist'> <span> ${taskitem} </span> <span> ${taskdate} </span> </span>
    <button type="button" onclick="edit(event)" class="button">Edit</button>
    <button type="button"  onclick="del(event)" class="button">Delete</button>`;
    document.getElementById('list').append(newlist);
    updateStorage();

  }
  function edit(event) {
    let editparent = event.target.parentNode;

    editparent.innerHTML = `<span>  <input type="text" name="" value="" id="input-text-edit" placeholder="Type......." class="inputs"> </span>
    <span> <input type="date" name="" value="" id="input-date-edit" class="inputs"></span>
    <button type="button" onclick="savetask(event)" class="button">Save</button>`;
    updateStorage();

  }

  function savetask(event) {
    let saveparent = event.target.parentNode;
    let saveitem = document.getElementById('input-text-edit').value;
    let savedate = document.getElementById('input-date-edit').value;
    saveparent.innerHTML = `<span class = 'updatelist'> <span> ${saveitem} </span> <span> ${savedate} </span> </span>
    <button type="button" onclick="edit(event)" class="button">Edit</button>
    <button type="button"  onclick="del(event)" class="button">Delete</button>`;
    updateStorage();

  }

  function del(event) {
    let parentNodeOfItem = event.target.parentNode;
    if(parentNodeOfItem) {
      parentNodeOfItem.remove();
    }
    updateStorage();

  }
