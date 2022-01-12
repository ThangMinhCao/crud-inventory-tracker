const tableBody = document.getElementById("table-body");

function init() {
  renderItems();
  
  const addButton = document.getElementById("add-button");
  addButton.addEventListener("click", addItem);
}

function renderItems() {
  clearTable();

  fetch("/items", { method: "GET" })
    .then(res => { return res.json(); })
    .then(data => data.forEach(item => appendItem(item)));
}

function appendItem(item) {
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
  while (tableBody.firstChild)
    tableBody.removeChild(tableBody.firstChild);
}

function addItem() {
  const title = document.getElementById("title-input").value;
  const quantity = document.getElementById("quantity-input").value;
  const category = document.getElementById("category-input").value;
  const date = document.getElementById("date-input").value;
  const warehouse = document.getElementById("warehouse-input").value;

  if (!(title && quantity && category && date && warehouse))
    return
  console.log({title, quantity, category, date, warehouse});

  fetch("/items", {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ title, quantity, category, date, warehouse })
  });

  renderItems();
}

function deleteItem(id) {
  fetch(`/items/${id}`, { method: "DELETE" }).then(() => {
    renderItems();
  });
}

function handleEdit(id) {
  const tableRow = document.getElementById(`item-${id}`);
  const editButton = tableRow.getElementsByClassName("edit-button")[0];
  const inputFields = tableRow.getElementsByTagName("input");
  const mode = editButton.textContent;

  editButton.addEventListener("click", handleApplyChange(id));

  for (let i = 0; i < inputFields.length; i++) {
    if (mode === "Edit")
      inputFields.item(i).removeAttribute("readonly");
    else
      inputFields.item(i).setAttribute("readonly", "true");
  }

  tableRow.style.backgroundColor = mode === "Edit" ? "#FDFD96" : "transparent";
  tableRow.focus();
  editButton.textContent = mode === "Edit" ? "Apply" : "Edit";
}

function handleApplyChange(id) {
  const tableRow = document.getElementById(`item-${id}`);
  const editButton = tableRow.getElementsByClassName("edit-button")[0];
  const inputFields = tableRow.getElementsByTagName("input");
  
  if (editButton.textContent === "Edit") return

  const updatedItem = {}

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
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updatedItem)
  });
}