import {
  ERROR,
  SEE_VEHICLE,
  RECHARGE_VEHICLE,
} from './actions'


import defaultState from './defaultState'

const vehiclesReducer = (vehicles = defaultState, { type, payload }) => {
  switch (type) {
    case RECHARGE_VEHICLE:
      return {...vehicles,list:payload.list.data, selectedItem:[]}
    case SEE_VEHICLE:
      return {...vehicles,selectedItem:[payload.selectedItem]}
    case ERROR:
      return { ...vehicles, error: payload }
    default:
      return vehicles
  }
}

export default vehiclesReducer
