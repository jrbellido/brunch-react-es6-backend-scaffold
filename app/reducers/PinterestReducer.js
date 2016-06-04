import Immutable from "immutable"

const defaultState = new Immutable.List()

export default function pinterestReducer(state = defaultState, action) {
  switch(action.type) {
    case 'CREATE_PIN':
      return state.concat(action.text);
    case 'EDIT_PIN':
      return state.set(action.id, action.text);
    case 'DELETE_PIN':
      return state.delete(action.id);
    default:
      return state;
  }
}