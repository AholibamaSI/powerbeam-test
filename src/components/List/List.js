import React from 'react'
import MaterialTable from 'material-table'

const ListItems = ({
  title,
  columns,
  labels,
  data,
  onEdit,
  onDelete,
  onView,
}) => {

  let dataActions = []
  if(onView !== ""){
    dataActions.push({
    icon: 'visibility',
    tooltip: 'Details',
    onClick: (event, { id }) => onView(id)
  })
  }

  if(onEdit !== ""){
    dataActions.push({
    icon: 'edit_outline',
    tooltip: 'Edit',
    onClick: (event, { id }) => onEdit(id)
  })
  }

  if(onDelete !== ""){
    dataActions.push({
    icon: 'delete_outline',
    tooltip: 'Delete',
    onClick: (event, { id }) => onDelete(id)
  })
  }
  return (
  <MaterialTable
    style={{ border: '0 px solid', boxShadow: 'none', padding: '0px' }}
    title={title}
    localization={{
      header: {
        actions: 'OPTIONS',
      },
      toolbar: {
        searchTooltip: 'Search',
        searchPlaceholder: 'Search',
      },
    }}
    columns={columns.map((column, index) => ({
      title: labels[index],
      field: column,
    }))}
    options={{
      actionsColumnIndex: -1,
    }}
    data={data}
    actions={dataActions}
  />)
}
export default ListItems
