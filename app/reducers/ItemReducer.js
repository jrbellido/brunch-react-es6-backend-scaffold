import Immutable from "immutable"

const defaultState = new Immutable.List()

export default function ItemReducer(state = defaultState, action) {
  switch(action.type) {
    case 'GET_ITEMS':
      console.log("ItemReducer; received action=", action.res.status, action.res.statusText)
      return new Immutable.List(action.res.data)
    case 'CREATE_ITEM':
      return state.items.concat(action.name, action.value)
    case 'EDIT_ITEM':
      return state.set(action.id, action.name, action.value)
    case 'DELETE_ITEM':
      return state.delete(action.id)
    default:
      return state
  }
}
