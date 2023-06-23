$("#form-value").submit((event) => {
  event.preventDefault();
  clear();
  let value = $("#value")[0].value;
  let square = calc_square(value);
  show_values(value, square);
  crivo(value, square);
});

function calc_square(value) {
  value = parseInt(value);
  square = Math.sqrt(value);
  square = Math.floor(square);
  return square;
}

function show_values(value, square) {
  let div_result = document.getElementById("card-result");
  let new_div = document.createElement("div");
  new_div.classList.add("card");

  let element_square = document.createElement("p");
  element_square.innerHTML = `Raiz = ${square}`;

  let td_table = "";
  let count_columns = 0;
  for (i = 2; i <= value; i++, count_columns++) {
    if (i == 2) {
      td_table += "<tr>";
    } else if (count_columns == 10) {
      td_table += "</tr>";
      if (i != value) {
        td_table += "<tr>";
      }
      count_columns = 0;
    }
    td_table += `<td id="${i}" class="border border-secodary" >${i}</td>`;
    if (i == value) {
      td_table += "<tr>";
    }
  }
  let div_table = document.createElement("div");
  div_table.classList.add("row");
  let table = document.createElement("table");
  table.classList.add("border", "border-secodary");
  table.insertAdjacentHTML("beforeend", td_table);
  div_table.append(table);
  new_div.append(element_square);
  new_div.append(div_table);
  div_result.append(new_div);
}

function clear() {
  let div_result = document.getElementById("card-result");
  div_result.innerHTML = "";
}

function crivo(value, square) {
  for (i = 2; i <= square; i++) {
    let value_test = i + 1;
    while (value_test <= value) {}
  }
}
