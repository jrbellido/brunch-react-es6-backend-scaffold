import request from "axios"

const API_URL = 'http://localhost:3131/item'

export function getItems() {
  return {
    type: 'GET_ITEMS',
    promise: request.get(API_URL)
  }
}

export function createItem(name, value) {
  return {
    type: 'CREATE_ITEM',
    promise: request.post(API_URL, {
      "name": name,
      "value": value
    })
  }
}

export function deleteItem(id) {
  return {
    type: 'DELETE_ITEM',
    promise: request.delete(`${API_URL}/${id}`)
  }
}

/*
export function editItem(id, name, value) {
  return {
    type: 'EDIT_ITEM',
    promise: request.post(API_URL)
    id,
    name,
    value
  }
}

*/
