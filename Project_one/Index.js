let Inhalt;
function addTodo() {
  Inhalt = todofield.value;
  todolist.innerHTML += `
  <li onclick ="gelöscht();" id ="Liste" class="mdl-list__item">
  <span class="mdl-list__item-primary-content">
    <i class="material-icons  mdl-list__item-avatar">label</i>
    ${todofield.value}
  </span>
  <span class="mdl-list__item-secondary-action">
    <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="list-checkbox-1">
      <input type="checkbox" id="list-checkbox-1" class="mdl-checkbox__input" checked />
    </label>
  </span>
  <button type="click" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
  Löschen
</button>

</li>
  `;

  console.log(Inhalt);
  todofield.value = "";
  Inhalt.value ="";
}

function gelöscht() {
  
    Liste.innerHTML = " " ;

    console.log("Funktioniert!");
  }
