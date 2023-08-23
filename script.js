// javascript
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
  remove,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
  databaseURL:
    "https://to-do-list-app-1e2df-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const todoListInDB = ref(database, "todolist");

const inputEl = document.getElementById("input-el");
const addBtn = document.getElementById("add-btn");
const todoListEl = document.getElementById("todo-lists");

addBtn.addEventListener("click", function () {
  let inputValue = inputEl.value;

  push(todoListInDB, inputValue);

  clearInputFieldEl();
});

onValue(todoListInDB, function (snapshot) {
  if (snapshot.exists()) {
    let itemsArray = Object.entries(snapshot.val());

    clearTodoListEl();

    for (let i = 0; i < itemsArray.length; i++) {
      let currentItem = itemsArray[i];

      appendItemToDoListEl(currentItem);
    }
  } else {
    todoListEl.innerHTML = "Start Your Plan ...";
  }
});

function clearTodoListEl() {
  todoListEl.innerHTML = "";
}

function clearInputFieldEl() {
  inputEl.value = "";
}

function appendItemToDoListEl(item) {
  let itemID = item[0];
  let itemValue = item[1];

  //  newEl.textContent = itemValue;

  todoListEl.innerHTML += `
  <div class="list-container" id="list-container">
    <div class="todo">
        <h4 class="todo--title">${itemValue}</h4>
        <p class="todo--para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, deleniti.</p>
    </div>
</div>
`;

  document
    .getElementById("list-container")
    ?.addEventListener("click", function () {
      let exactLocationOfItemInDB = ref(database, `todolist/${itemID}`);

      remove(exactLocationOfItemInDB);
    });

  //shoppingListEl.append(newEl);
}
