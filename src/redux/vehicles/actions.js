import axios from 'axios'
export const RECHARGE_VEHICLE = 'RECHARGE_VEHICLE'
export const SEE_VEHICLE = 'SEE_VEHICLE'
export const ERROR = 'ERROR'

export const addRechargeList = () => dispatch =>
  axios({
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    url: process.env.REACT_APP_API,
  })
    .then(response =>
      dispatch({
        type: RECHARGE_VEHICLE,
        payload: { list: response },
      })
    )
    .catch(error => {
      dispatch({ type: ERROR, payload: { error: error } })
    })
export const seeVehicle = (UID_VEHICULO) => dispatch =>
  axios({
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    url: process.env.REACT_APP_API,
  })
  .then(function(response) {
    const resultado = response.data.find( vehicle => vehicle.UID_VEHICULO === UID_VEHICULO );
    dispatch({
      type: SEE_VEHICLE,
      payload: { selectedItem: resultado },
    })
  })
  .catch(error => {
    dispatch({ type: ERROR, payload: { error: error } })
  })

