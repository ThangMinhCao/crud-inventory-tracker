# CRUD Inventory Tracker - Shopify Back-end Summer 2022 Internship Challenge

[:link: **Try it out with basic HTML UI**](https://crud-inventory-tracker.herokuapp.com/)

## Highlighted features

The program is implemented with RESTful API architechture that has:
- **CRUD Functionality**:
  + Get all item
  + Add new item
  + Remove item
  + Edit (update) item
- **Main additional feature**: <u>Filtering</u> based on metadata of the inventory (title, quantity, category, date and warehouse). I conbine this feature to the `GET` method of the API with query parameters for clean design.

## Development technologies

- Server: **Node.js** + **Express.js**
- Database: **MongoDB** (Atlas) with **Mongoose** schema for the item model

_Minor techonogy for UI for testing purposes: Template engine **EJS**_

## Development notes

- You can test the API using any API platform (Postman) with the url:

    https://crud-inventory-tracker.herokuapp.com/
  
- API Endpoints:
  + `GET /items`: Request a list of items from API (with additional query of `title`, `quantity`, `category`, `date` and `warehouse`).
  + `POST /items`: Request to create and add a new item with given body (as JSON format).
      
      `{ title: String, quantity: Number, category: String, date: String, warehouse: String }`.
  
  + `PUT /items`: Request to update an existing item with new information (with body given as JSON format similar to `POST` method).
  + `DELETE /items/:id`: Request to delete an existing item based on given `:id` parameter.

## UI Testing

#### CRUD Features

- Get items: All items are generated on the data table when the page is rendered the first time

  ![get_items](https://github.com/ThangMinhCao/crud-inventory-tracker/blob/master/assets/Data-table.png)

- Add new item: Enter all information to the add item field and click the **Add** button

  ![add_new_item](https://github.com/ThangMinhCao/crud-inventory-tracker/blob/master/assets/Add-item-field.png)
  
- Edit item: Click on the **Edit** button on one of the item (table row), the row will turn to yellow indicates that it's being edited. After you finish, click on apply to save changes to the database.

  ![edit_item](https://github.com/ThangMinhCao/crud-inventory-tracker/blob/master/assets/Editing-table-row.png)
 
- Delete item: Click on the **Delete** button on one of the item (table row), the item will be removed from the table as well as the database.

#### Main additional feature: Filter items

- Enter all desired filter parameters on the filter field and click on the **Filter** button. The data table will be modified that contains only items that has **exactly** matched filter parameters (single or combined).
- Click on **Clear** to clear all filter parameters as well as reseting the data table.
  
  ![filter_item](https://github.com/ThangMinhCao/crud-inventory-tracker/blob/master/assets/Filter-field.png)

