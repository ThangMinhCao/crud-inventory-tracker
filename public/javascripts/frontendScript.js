const tableBody = document.getElementById("table-body");

function init() {
  getItems();

  const addButton = document.getElementById("add-button");
  addButton.addEventListener("click", addItem);

  const filterButton = document.getElementById("filter-button");
  filterButton.addEventListener("click", getItems);

  const clearFilterButton = document.getElementById("clear-filter-button");
  clearFilterButton.addEventListener("click", clearFilter);
}

function renderItems(items) {
  clearTable();
  items.forEach((item) => renderOneItem(item));
}

function renderOneItem(item) {
  const { _id, title, quantity, category, date, warehouse } = item;
  tableBody.insertAdjacentHTML(
    "beforeend",
    `
      <tr id="item-${_id}">
        <td><input name="title" value="${title}" readonly /></td>
        <td><input name="quantity" type="number" value="${quantity}" readonly /></td>
        <td><input name="category" value="${category}" readonly /></td>
        <td><input name="date" type="date" value="${date}" readonly /></td>
        <td><input name="warehouse" value="${warehouse}" readonly /></td>
        <td>
          <button class="edit-button" onclick="handleEdit('${_id}')">Edit</button>
          <button onclick="deleteItem('${_id}')">Remove</button>
        </td>
      </tr>
    `
  );
}

function clearTable() {
  while (tableBody.firstChild) tableBody.removeChild(tableBody.firstChild);
}

function addItem() {
  const title = document.getElementById("title-input").value;
  const quantity = document.getElementById("quantity-input").value;
  const category = document.getElementById("category-input").value;
  const date = document.getElementById("date-input").value;
  const warehouse = document.getElementById("warehouse-input").value;

  if (!(title && quantity && category && date && warehouse)) {
    console.log("Data fields can't be empty.")
    return;
  }

  fetch("/items", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, quantity, category, date, warehouse }),
  });

  getItems();
}

function deleteItem(id) {
  fetch(`/items/${id}`, { method: "DELETE" }).then(() => {
    getItems();
  });
}

function handleEdit(id) {
  const tableRow = document.getElementById(`item-${id}`);
  const editButton = tableRow.getElementsByClassName("edit-button")[0];
  const inputFields = tableRow.getElementsByTagName("input");
  const mode = editButton.textContent;

  editButton.addEventListener("click", handleApplyChange(id));

  for (let i = 0; i < inputFields.length; i++) {
    if (mode === "Edit") inputFields.item(i).removeAttribute("readonly");
    else inputFields.item(i).setAttribute("readonly", "true");
  }

  tableRow.style.backgroundColor = mode === "Edit" ? "#FDFD96" : "transparent";
  tableRow.focus();
  editButton.textContent = mode === "Edit" ? "Apply" : "Edit";
}

function handleApplyChange(id) {
  const tableRow = document.getElementById(`item-${id}`);
  const editButton = tableRow.getElementsByClassName("edit-button")[0];
  const inputFields = tableRow.getElementsByTagName("input");

  if (editButton.textContent === "Edit") return;

  const updatedItem = {};

  for (let i = 0; i < inputFields.length; i++) {
    const input = inputFields.item(i);
    updatedItem[input.name] = input.value;
  }
  updateItem(id, updatedItem);
  editButton.removeEventListener("click", handleApplyChange);
}

function updateItem(id, updatedItem) {
  fetch(`/items/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedItem),
  });
}

function getItems() {
  const { title, quantity, category, date, warehouse } = getFilterInputValues();
  const query = ""
    + `title=${title}&`
    + `quantity=${quantity}&`
    + `category=${category}&`
    + `date=${date}&`
    + `warehouse=${warehouse}`;

  fetch(`/items?${query}`, { method: "GET" })
    .then(res => res.json())
    .then(data => renderItems(data))
    .catch(err => console.log(err));
}

function clearFilter() {
  Object.values(getFilterInputs()).forEach((input) => input.value = "");  
  getItems();
}

function getFilterInputs() {
  const title = document.getElementById("title-filter");
  const quantity = document.getElementById("quantity-filter");
  const category = document.getElementById("category-filter");
  const date = document.getElementById("date-filter");
  const warehouse = document.getElementById("warehouse-filter");

  return { title, quantity, category, date, warehouse };
}

function getFilterInputValues() {
  return Object.fromEntries(
    Object.entries(getFilterInputs()).map(([key, input]) => [key, input.value])
  );
}