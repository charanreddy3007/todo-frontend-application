<!-- Assuming you have the required HTML elements in your document. -->
<!-- For example: <button class="add_task">Add Task</button>, <ul class="mainList"></ul>, <textarea class="text_area"></textarea> -->

<script>
var add_task = document.querySelector(".add_task");
var mainList = document.querySelector(".mainList");
var text_area = document.querySelector(".text_area");

add_task.onclick = function () {
  var all_Lists = document.querySelectorAll(".mainList li");
  var i = Math.floor(Math.random() * (100000 - 6569) + 6569); // Fixed random number generation
  if (text_area.value.length > 5) {
    var new_li = document.createElement("li");
    new_li.setAttribute("id", i);
    var new_li_data = `<div class="main_div">
    <div class="checked_div"><span id="check${i}" onclick="checked(${i})"><i class="fa-solid fa-check"></i></span><strike id="strike${i}" class="strike_none">${text_area.value}</strike></div><span><i id="deletes${i}" onclick="deleted(${i})" class="fa-solid fa-xmark"></i></span>
</div>
<hr>`;
    new_li.innerHTML = new_li_data;
    console.log(new_li_data);
    mainList.appendChild(new_li);
    text_area.value = "";
  }
};

function checked(uid) {
  var checked = document.getElementById("strike" + uid);
  checked.classList.toggle("strike_none");
  var check = document.getElementById("check" + uid);
  check.classList.toggle("blue");
}

function deleted(id) {
  var del = document.getElementById(id);
  mainList.removeChild(del);
}
</script>
