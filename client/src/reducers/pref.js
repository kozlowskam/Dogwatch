import {PREF_OF_USER} from '../actions/pref'


export default (state = '', { type, payload }) => {
  switch(type) {
  case PREF_OF_USER:
    //console.log(payload);
    return payload
  default:
    return state
  }
}
