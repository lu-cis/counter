var button = document.getElementById(`increase`),
  count = 0;
button.onclick = function() {
  count += 1;
  $(`#number_of_clicks`).text(count);
};


var button2 = document.getElementById(`decrease`),
  count = 0;
button2.onclick = function() {
  count -= 1;
  $(`#number_of_clicks`).text(count);
};
