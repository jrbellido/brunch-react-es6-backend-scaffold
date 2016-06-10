import Immutable from "immutable"

const defaultState = new Immutable.List()

export default function ItemReducer(state = defaultState, action) {
  switch(action.type) {
    case 'GET_ITEMS':
      console.log("ItemReducer; GET_ITEMS;", action.res.status, action.res.statusText)
      return new Immutable.List(action.res.data)
    case 'CREATE_ITEM':
      console.log("ItemReducer; CREATE_ITEM;", action.res.status, action.res.data)
      return new Immutable.List(state).push(action.res.data)
    case 'EDIT_ITEM':
      return state.set(action.id, action.name, action.value)
    case 'DELETE_ITEM':
      return new Immutable.List(state)
      return new Immutable.List(state.filter( (item) => { item.id != 'dxxx' }))
    default:
      return state
  }
}
