const btn = document.querySelector("button");
const val = document.getElementById("newTask");

const container = document.querySelector("#tasksContainer");

// document.addEventListener("DOMContentLoaded", loadInDOM);

btn.addEventListener("click", function () {
  const newTask = val.value.trim();
console.log(newTask);
  if (newTask != "") {
    createTasks(newTask);
    val.value = "";
  } else {
    alert("please add new task ");
  }
});

function createTasks(newTask) {

 const li= document.createElement('li');
li.innerHTML=newTask;
container.appendChild(li);

const span= document.createElement("span")
span.innerHTML="\u00d7";
li.appendChild(span);

}

$("#tasksContainer").on("click", function (e) {
  const $target = $(e.target);

  if ($target.is("li")) {
    $target.toggleClass("checked");
  } else if ($target.is("span")) {
    $target.parent().remove();
  } else if ($target.parent().is("li")) {
    $target.parent().toggleClass("checked");
  }
});


