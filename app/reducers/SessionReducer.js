import Immutable from "immutable"

const defaultState = new Immutable.List()

export default function SessionReducer(state = defaultState, action) {
  switch(action.type) {
    case 'SIGN_IN':
      return {
        "signed_in": true
      }
    case 'SIGN_OUT':
      return {
        "signed_in": false
      }
    default:
      return state
  }
}
