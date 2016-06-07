import Immutable from "immutable"

const defaultState = new Immutable.List()

export default function ItemReducer(state = defaultState, action) {
  switch(action.type) {
    case 'GET_ITEMS':
      const res = new Immutable.List(action.res.data)
      return res
    case 'CREATE_ITEM':
      return state.concat(action.name, action.value)
    case 'EDIT_ITEM':
      return state.set(action.id, action.name, action.value)
    case 'DELETE_ITEM':
      return state.delete(action.id)
    default:
      return state
  }
}
