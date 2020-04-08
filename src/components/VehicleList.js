import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ListItems  from './List/List'
import { seeVehicle, addRechargeList } from '../redux/vehicles/actions'
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
  textImportant: {
    color: 'red'
  },
}));

const VehicleList = ({ history, vehicles, seeVehicle, addRechargeList }) => {
  const classes = useStyles();
  function seeVehicleData(id) {
    seeVehicle(id)
    history.push('/admin/see-vehicle')
  }
  useEffect(() => {
    addRechargeList()
  }, [])
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <label className={classes.textImportant}> Please scroll to the end-right to see column OPTIONS</label>
          <ListItems
            title={''}
            data={vehicles.list.map(issue => ({
              ...issue,
              id:issue.UID_VEHICULO,
              UID_VEHICULO: issue.UID_VEHICULO,
              UID_PHYSICAL: issue.UID_PHYSICAL,
              UID_EXTERNAL: issue.UID_EXTERNAL,
              ESTATUS_VEHICULO: issue.ESTATUS_VEHICULO,
              ESTATUS_CONEXION: issue.ESTATUS_CONEXION,
              CIUDAD: issue.CIUDAD,
              NOMBRE_OPERADOR: issue.NOMBRE_OPERADOR,
              FABRICANTE: issue.FABRICANTE,
              MODELO: issue.MODELO,
            }))}
            columns={[
              'UID_VEHICULO',
              'UID_PHYSICAL',
              'UID_EXTERNAL',
              'ESTATUS_VEHICULO',
              'ESTATUS_CONEXION',
              'CIUDAD',
              'NOMBRE_OPERADOR',
              'FABRICANTE',
              'MODELO',
            ]}
            labels={[
              'UID_VEHICULO',
              'UID_PHYSICAL',
              'UID_EXTERNAL',
              'ESTATUS_VEHICULO',
              'ESTATUS_CONEXION',
              'CIUDAD',
              'NOMBRE_OPERADOR',
              'FABRICANTE',
              'MODELO',
              ]}
            onEdit=""
            onView={event => seeVehicleData(event)}
            onDelete=""
          />
        </Grid>
      </Grid>
    </div>
  );
}


const mapStateToPros = ({ history, vehicles }) => ({ vehicles })
const mapDispatchToProps = { seeVehicle, addRechargeList }

export default connect(
  mapStateToPros,
  mapDispatchToProps
)(VehicleList)


