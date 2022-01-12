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
