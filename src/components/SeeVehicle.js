import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));

const SeeVehicle = ({ history, vehicles }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          {vehicles.selectedItem.length > 0 ?
            <div>
              <label>UID_PHYSICAL: {vehicles.selectedItem[0].UID_PHYSICAL}</label><br></br>
              <label>UID_VEHICULO: {vehicles.selectedItem[0].UID_VEHICULO}</label><br></br>
              <label>UID_EXTERNAL: {vehicles.selectedItem[0].UID_EXTERNAL}</label><br></br>
              <label>ESTATUS_VEHICULO: {vehicles.selectedItem[0].ESTATUS_VEHICULO}</label><br></br>
              <label>NIVEL_BATERIA: {vehicles.selectedItem[0].NIVEL_BATERIA}</label><br></br>
              <label>UBICACION_GPS_LAT: {vehicles.selectedItem[0].UBICACION_GPS_LAT}</label><br></br>
              <label>UBICACION_GPS_LON: {vehicles.selectedItem[0].UBICACION_GPS_LON}</label><br></br>
              <label>CIUDAD: {vehicles.selectedItem[0].CIUDAD}</label><br></br>
              <label>NOMBRE_OPERADOR: {vehicles.selectedItem[0].NOMBRE_OPERADOR}</label><br></br>
              <label>FABRICANTE: {vehicles.selectedItem[0].FABRICANTE}</label><br></br>
              <label>MODELO: {vehicles.selectedItem[0].MODELO}</label><br></br>
              <label>LAST_CONNECTION_UPDATE: {vehicles.selectedItem[0].LAST_CONNECTION_UPDATE}</label><br></br>
              <label>ESTATUS_CONEXION: {vehicles.selectedItem[0].ESTATUS_CONEXION}</label><br></br>
              <label>VERSION_BRAIN: {vehicles.selectedItem[0].VERSION_BRAIN}</label><br></br>
              <label>VERSION_FIRMWARE: {vehicles.selectedItem[0].VERSION_FIRMWARE}</label><br></br>
              <Button style={{ margin: 8 }}
                variant="contained"
                color="primary"
                size="large"
                onClick={()=>{history.push('/admin/vehicles')}}> 
                Go Back
              </Button>
            </div>
            : 
            <div>
              <h1>You didn't select a vehicle</h1> 
              <Button style={{ margin: 8 }}
                variant="contained"
                color="primary"
                size="large"
                onClick={()=>{history.push('/admin/vehicles')}}> 
                Go Back
              </Button>
            </div>}
        </Grid>
      </Grid>
    </div>
  );
}


const mapStateToPros = ({ history, vehicles }) => ({ vehicles })

export default connect(
  mapStateToPros
)(SeeVehicle)

