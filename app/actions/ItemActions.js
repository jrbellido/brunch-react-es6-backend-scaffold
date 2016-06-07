import request from 'axios';

export function getItems() {
  return {
    type:    'GET_ITEMS',
    promise: new Promise((resolve, reject) => {
      console.log("GET_ITEMS action fired")
      
      resolve([
        { name: 'Item#1', value: 5 },
        { name: 'Item#2', value: 3 },
        { name: 'Item#3', value: 1 }
      ])
    })
  }
}

export function createItem(name, value) {
  return {
    type: 'CREATE_ITEM',
    name,
    value
  }
}

export function editItem(id, name, value) {
  return {
    type: 'EDIT_ITEM',
    id,
    name,
    value
  }
}

export function deleteItem(id) {
  return {
    type: 'DELETE_ITEM',
    id
  }
}
